(function () {
  "use strict";
  var LANGS = ["en", "ru", "kk"];
  var LABEL = { en: "EN", ru: "RU", kk: "ҚАЗ" };
  var PAGES = [
    ["product", "nav.product"],
    ["reactivation", "nav.reactivation"],
    ["how-it-works", "nav.how"],
    ["integrations", "nav.integrations"],
    ["pricing", "nav.pricing"],
    ["demo", "nav.demo"]
  ];
  var EMAIL = "hello@qerivo.ai";
  var page = document.body.getAttribute("data-page") || "home";

  /* ---------- language ---------- */
  function detect() {
    var saved = null;
    try { saved = localStorage.getItem("qerivo-lang"); } catch (e) {}
    if (LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("kk") === 0) return "kk";
    if (nav.indexOf("ru") === 0) return "ru";
    return "en";
  }
  var lang = detect();
  function t(key) {
    var v = window.I18N[key];
    if (!v) return key;
    return v[LANGS.indexOf(lang)] || v[0];
  }

  /* ---------- shared blocks ---------- */
  function renderHeader() {
    var links = PAGES.map(function (p) {
      return '<a href="' + p[0] + '.html"' + (p[0] === page ? ' class="active"' : "") + ' data-i18n="' + p[1] + '"></a>';
    }).join("");
    var langs = LANGS.map(function (l) {
      return '<button type="button" data-lang="' + l + '">' + LABEL[l] + "</button>";
    }).join("");
    return '<header class="site-header"><nav class="nav container" aria-label="Main">' +
      '<a class="brand" href="index.html"><img src="assets/qerivo-logo.png" alt="" />Qerivo</a>' +
      '<div class="nav-links">' + links +
      '<a class="btn btn-primary panel-cta" href="contact.html"><span data-i18n="cta.book"></span> ↗</a></div>' +
      '<div class="nav-right"><div class="lang" role="group" aria-label="Language">' + langs + "</div>" +
      '<a class="btn btn-primary btn-sm" href="contact.html"><span data-i18n="cta.book"></span> ↗</a>' +
      '<button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div>' +
      "</nav></header>";
  }
  function renderFooter() {
    var links = PAGES.map(function (p) {
      return '<a href="' + p[0] + '.html" data-i18n="' + p[1] + '"></a>';
    }).join("");
    return '<footer class="footer"><div class="container"><div class="foot">' +
      '<div><a class="brand" href="index.html"><img src="assets/qerivo-logo.png" alt="" />Qerivo</a><p data-i18n="foot.about"></p></div>' +
      '<div><h4 data-i18n="foot.pages"></h4>' + links + "</div>" +
      '<div><h4 data-i18n="foot.contact"></h4><a href="mailto:' + EMAIL + '">' + EMAIL + '</a><a href="contact.html" data-i18n="cta.book"></a></div>' +
      '</div><div class="copy"><span data-i18n="foot.rights"></span> · <span data-i18n="foot.demo"></span></div></div></footer>';
  }
  function renderCta() {
    return '<div class="container"><div class="cta-box"><div class="eyebrow" data-i18n="cta.eyebrow"></div>' +
      '<h2 data-i18n="cta.title"></h2><p data-i18n="cta.text"></p>' +
      '<a class="btn btn-primary" href="contact.html"><span data-i18n="cta.book"></span> ↗</a></div></div>';
  }
  var h = document.getElementById("site-header"); if (h) h.outerHTML = renderHeader();
  var f = document.getElementById("site-footer"); if (f) f.outerHTML = renderFooter();
  document.querySelectorAll("[data-cta]").forEach(function (el) { el.innerHTML = renderCta(); });

  /* ---------- apply language ---------- */
  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-label")));
    });
    var tk = document.body.getAttribute("data-title");
    if (tk) document.title = t(tk);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    if (window.QerivoDemo) window.QerivoDemo.refresh();
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("qerivo-lang", lang); } catch (e) {}
      apply();
    });
  });

  /* ---------- mobile menu ---------- */
  var nav = document.querySelector(".nav");
  var menuBtn = document.querySelector(".menu-btn");
  if (nav && menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- hero video ---------- */
  var video = document.querySelector(".video-shell video");
  if (video) {
    video.muted = true;
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
    video.addEventListener("error", function () { video.style.display = "none"; }, true);
  }

  /* ---------- demo chat ---------- */
  var body = document.getElementById("chat-body");
  if (body) {
    var form = document.getElementById("chat-form");
    var input = document.getElementById("chat-input");
    var chips = document.getElementById("chips");
    var history = [{ who: "ai", key: "demo.first" }];
    var busy = false;

    function bubble(m) {
      var d = document.createElement("div");
      d.className = "msg " + (m.who === "me" ? "me" : "ai");
      d.textContent = m.key ? t(m.key) : m.text;
      d.dataset.key = m.key || "";
      return d;
    }
    function scroll() { body.scrollTop = body.scrollHeight; }
    function draw() {
      body.innerHTML = "";
      history.forEach(function (m) { body.appendChild(bubble(m)); });
      scroll();
    }
    function typing(on) {
      var old = body.querySelector(".typing");
      if (old) old.remove();
      if (on) {
        var d = document.createElement("div");
        d.className = "msg ai typing"; d.innerHTML = "<i></i><i></i><i></i>";
        body.appendChild(d); scroll();
      }
    }
    function send(text) {
      text = (text || "").trim();
      if (!text || busy) return;
      busy = true;
      history.push({ who: "me", text: text });
      body.appendChild(bubble(history[history.length - 1]));
      input.value = ""; typing(true);
      var started = Date.now();
      function done(reply) {
        var wait = Math.max(0, 700 - (Date.now() - started));
        setTimeout(function () {
          typing(false);
          var m = reply ? { who: "ai", text: reply } : { who: "ai", key: "demo.fail" };
          history.push(m); body.appendChild(bubble(m)); scroll(); busy = false;
        }, wait);
      }
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, language: lang })
      }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { done(d.reply); })
        .catch(function () { done(null); });
    }
    form.addEventListener("submit", function (e) { e.preventDefault(); send(input.value); });
    chips.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () { send(t(b.getAttribute("data-i18n"))); });
    });
    window.QerivoDemo = {
      refresh: function () {
        // re-translate only scripted messages; keep what the user typed
        body.querySelectorAll(".msg[data-key]").forEach(function (el) {
          if (el.dataset.key) el.textContent = t(el.dataset.key);
        });
      }
    };
    draw();
  }

  /* ---------- contact form (opens the email app) ---------- */
  var lead = document.getElementById("lead-form");
  if (lead) {
    lead.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { return (document.getElementById(id).value || "").trim(); };
      var bodyText = "Name: " + v("f-name") + "\nClinic: " + v("f-clinic") + "\nWhatsApp/phone: " + v("f-phone") + "\n\n" + v("f-msg");
      document.getElementById("form-status").textContent = t("con.ok");
      window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Qerivo demo — " + v("f-clinic")) + "&body=" + encodeURIComponent(bodyText);
    });
  }

  apply();
})();
