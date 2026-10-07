const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const messages = document.querySelector("#messages");
const status = document.querySelector("#demo-status");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const languageButtons = document.querySelectorAll(".language-button");

const translations = {
  en: {
    title: "Dentara — Your AI assistant for dental clinics",
    navHow: "How it works", navFeatures: "Features", navChannels: "Channels",
    start: "Start for free", heroEyebrow: "The AI front desk for modern clinics",
    heroTitle: "Your AI assistant for <em>dental clinics.</em>",
    heroSubtitle: "Dentara talks to patients, answers questions, qualifies leads, books appointments, and sends reminders — 24/7.",
    seeHow: "See how it works", trust: "Built for busy dental teams", inbox: "One intelligent inbox for",
    how: "How it works", processTitle: "From first message to <em>booked.</em>",
    processIntro: "A smoother experience for your patients, and more time back for your team.",
    steps: ["Patient sends a message", "Dentara understands & responds", "Appointment or handoff"],
    stepText: ["From the channel they already use, day or night.", "Helpful, on-brand answers that move the conversation forward.", "Convert interest into action, or bring your staff in when it matters."],
    built: "Built for your practice", featureTitle: "Less repetition.<br /><em>More connection.</em>",
    featureIntro: "Dentara handles the everyday conversations so your team can focus on the moments that need a human touch.",
    explore: "Explore the platform", features: ["Patient Reactivation", "Treatment Recovery", "Revenue Attribution", "No-show Recovery", "Overdue Recall", "Consultation Recovery", "AI Conversations", "Automated Follow-ups", "Appointment Booking", "Human Handoff"],
    featureText: ["Find inactive patients and bring them back into a conversation.", "Reconnect patients who started care but never finished.", "See which conversations became appointments, visits, and value.", "Follow up with missed appointments and make returning easy.", "Surface patients who are due for their next check-up.", "Re-engage patients who asked questions but never booked.", "Start helpful, personalized conversations at the right time.", "Keep every recovery sequence moving without manual chasing.", "Turn patient intent into a clear appointment request.", "Bring your team in when a conversation needs a human touch."],
    tryIt: "Try the experience", demoTitle: "See how Dentara <em>talks.</em>", demoIntro: "Send a test message and see a sample response. This demo uses a simple mock service — ready for your clinic's knowledge base.",
    demoPoints: ["✓ Patient-friendly responses", "✓ Always ready to hand off"], channelsEyebrow: "Meet patients where they are",
    channelsTitle: "One assistant.<br /><em>Every channel.</em>", channelsIntro: "Dentara is designed to bring your patient conversations together across the channels they already love.",
    planned: "Planned channel", better: "A better front desk", benefitsTitle: "Make room for what <em>matters.</em>",
    benefits: ["Respond faster", "Capture more leads", "Reduce repetitive work", "Never miss a potential patient", "Let staff focus on patients"],
    benefitText: ["Give every patient a helpful first response without the wait.", "Keep the conversation going while interest is high.", "Let Dentara take care of the questions your team sees every day.", "Stay present beyond office hours and across channels.", "Put your team's time where empathy and expertise count."],
    ready: "Ready when you are", ctaTitle: "Turn more conversations<br />into <em>appointments.</em>", ctaText: "Start building a better patient experience today.",
    footer: "AI-powered conversations for modern dental clinics.", placeholder: "Try “Can I book an appointment?”", greeting: "Hi! What can I help you with today?", status: "Mock response from Dentara"
  },
  ru: {
    title: "Dentara — AI-ассистент для стоматологических клиник", navHow: "Как это работает", navFeatures: "Возможности", navChannels: "Каналы", start: "Начать бесплатно",
    heroEyebrow: "AI-регистратура для современных клиник", heroTitle: "Ваш AI-ассистент для <em>стоматологических клиник.</em>", heroSubtitle: "Dentara общается с пациентами, отвечает на вопросы, квалифицирует обращения, помогает записаться и отправляет напоминания — 24/7.",
    seeHow: "Как это работает", trust: "Для загруженных стоматологических команд", inbox: "Единый умный inbox для", how: "Как это работает", processTitle: "От первого сообщения до <em>записи.</em>", processIntro: "Комфортнее для пациентов и больше времени для вашей команды.",
    steps: ["Пациент отправляет сообщение", "Dentara понимает и отвечает", "Запись или передача сотруднику"], stepText: ["Из привычного канала — днём и ночью.", "Полезные ответы в стиле вашей клиники, которые двигают диалог вперёд.", "Превращайте интерес в действие или подключайте сотрудника, когда это важно."],
    built: "Для вашей практики", featureTitle: "Меньше рутины.<br /><em>Больше заботы.</em>", featureIntro: "Dentara берёт на себя повседневные диалоги, чтобы команда уделяла внимание действительно важным моментам.", explore: "Изучить платформу",
    features: ["Возврат пациентов", "Восстановление лечения", "Атрибуция выручки", "Возврат после неявки", "Просроченный recall", "Возврат после консультации", "AI-диалоги", "Автоматические follow-up", "Запись на приём", "Передача сотруднику"], featureText: ["Находите неактивных пациентов и возвращайте их в диалог.", "Возвращайте пациентов, которые начали лечение, но не завершили его.", "Видите, какие диалоги стали записями, визитами и выручкой.", "Напоминайте о пропущенных визитах и помогайте вернуться.", "Находите пациентов, которым пора на check-up.", "Возвращайте пациентов, которые интересовались, но не записались.", "Начинайте полезные персональные диалоги в нужный момент.", "Автоматически продолжайте цепочки возврата.", "Превращайте интерес пациента в запись.", "Подключайте сотрудника, когда нужен человек."],
    tryIt: "Попробуйте", demoTitle: "Посмотрите, как Dentara <em>общается.</em>", demoIntro: "Отправьте тестовое сообщение и получите пример ответа. Сейчас используется простой mock-сервис — его легко подключить к базе знаний клиники.", demoPoints: ["✓ Дружелюбные ответы", "✓ Простая передача сотруднику"],
    channelsEyebrow: "Будьте там, где пациенты", channelsTitle: "Один ассистент.<br /><em>Каждый канал.</em>", channelsIntro: "Dentara объединяет общение с пациентами в привычных для них каналах.", planned: "Канал запланирован", better: "Лучшая регистратура", benefitsTitle: "Освободите время для <em>главного.</em>",
    benefits: ["Отвечайте быстрее", "Получайте больше обращений", "Сократите рутину", "Не упускайте пациентов", "Дайте команде сосредоточиться на пациентах"], benefitText: ["Каждый пациент получает первый ответ без ожидания.", "Продолжайте диалог, пока интерес максимален.", "Поручите Dentara повторяющиеся вопросы.", "Оставайтесь на связи после закрытия клиники.", "Оставьте команде время для заботы и экспертизы."], ready: "Готовы начать?", ctaTitle: "Превращайте диалоги<br />в <em>записи.</em>", ctaText: "Создайте лучший опыт для пациентов уже сегодня.", footer: "AI-диалоги для современных стоматологических клиник.", placeholder: "Например: «Можно записаться на приём?»", greeting: "Здравствуйте! Чем я могу помочь?", status: "Тестовый ответ Dentara"
  },
  kk: {
    title: "Dentara — стоматологиялық клиникаларға арналған AI-ассистент", navHow: "Қалай жұмыс істейді", navFeatures: "Мүмкіндіктер", navChannels: "Арналар", start: "Тегін бастау",
    heroEyebrow: "Заманауи клиникаларға арналған AI-регистратура", heroTitle: "Стоматологиялық клиникаларға арналған <em>AI-ассистент.</em>", heroSubtitle: "Dentara пациенттермен сөйлеседі, сұрақтарға жауап береді, өтініштерді саралайды, қабылдауға жазуға көмектеседі және еске салғыштар жібереді — 24/7.",
    seeHow: "Қалай жұмыс істейді", trust: "Стоматологиялық командалар үшін", inbox: "Бір ақылды inbox —", how: "Қалай жұмыс істейді", processTitle: "Алғашқы хабарламадан <em>жазылуға дейін.</em>", processIntro: "Пациенттерге ыңғайлы, командаңызға көбірек уақыт.", steps: ["Пациент хабарлама жібереді", "Dentara түсініп, жауап береді", "Қабылдауға жазылу немесе қызметкерге беру"], stepText: ["Пациент қолданатын арнадан, кез келген уақытта.", "Диалогты алға жылжытатын пайдалы әрі нақты жауаптар.", "Қызығушылықты әрекетке айналдырыңыз немесе қажет кезде маманды қосыңыз."],
    built: "Клиникаңыз үшін", featureTitle: "Қайталанатын жұмыс аз.<br /><em>Қамқорлық көп.</em>", featureIntro: "Dentara күнделікті диалогтарды жүргізеді, ал командаңыз маңызды сәттерге назар аударады.", explore: "Платформаны зерттеу", features: ["Пациенттерді қайтару", "Емді қалпына келтіру", "Түсімді атрибуциялау", "Келмегендерді қайтару", "Мерзімі өткен recall", "Кеңестен кейін қайтару", "AI-диалогтар", "Автоматты follow-up", "Қабылдауға жазу", "Қызметкерге беру"], featureText: ["Белсенді емес пациенттерді тауып, диалогқа қайтарыңыз.", "Емді бастап, аяқтамаған пациенттермен қайта байланысыңыз.", "Қай диалог жазылуға, визитке және түсімге айналғанын көріңіз.", "Келмеген пациенттерге қайта жазып, оралуын жеңілдетіңіз.", "Тексерілу уақыты өткен пациенттерді көрсетіңіз.", "Сұрақ қойып, бірақ жазылмаған пациенттерді қайтарыңыз.", "Дер кезінде пайдалы, жеке диалог бастаңыз.", "Қайтару тізбегін автоматты жалғастырыңыз.", "Пациент қызығушылығын нақты жазылуға айналдырыңыз.", "Адам көмегі керек кезде қызметкерді қосыңыз."],
    tryIt: "Қазір көріңіз", demoTitle: "Dentara қалай <em>сөйлесетінін</em> көріңіз.", demoIntro: "Тест хабарламасын жіберіп, жауап үлгісін көріңіз. Бұл демо қарапайым mock-сервисті қолданады — кейін клиника білім базасына дайын.", demoPoints: ["✓ Пациентке ыңғайлы жауаптар", "✓ Қызметкерге беруге дайын"],
    channelsEyebrow: "Пациенттер бар жерде болыңыз", channelsTitle: "Бір ассистент.<br /><em>Барлық арнада.</em>", channelsIntro: "Dentara пациенттер қолданатын арналардағы диалогтарды бір жерге жинауға арналған.", planned: "Жоспарланған арна", better: "Жақсырақ регистратура", benefitsTitle: "Маңызды нәрсеге <em>уақыт бөліңіз.</em>",
    benefits: ["Жылдам жауап беріңіз", "Көбірек өтініш қабылдаңыз", "Қайталанатын жұмысты азайтыңыз", "Бірде-бір пациентті жіберіп алмаңыз", "Команда пациенттерге назар аударсын"], benefitText: ["Әр пациентке күттірмей алғашқы жауап беріңіз.", "Қызығушылық жоғары кезде диалогты жалғастырыңыз.", "Күнделікті сұрақтарды Dentara-қа тапсырыңыз.", "Жұмыс уақытынан кейін де байланыста болыңыз.", "Команда уақыты қамқорлық пен тәжірибеге жұмсалсын."], ready: "Бастауға дайынсыз ба?", ctaTitle: "Көбірек диалогты<br /><em>қабылдауға айналдырыңыз.</em>", ctaText: "Пациенттерге жақсы тәжірибені бүгін бастаңыз.", footer: "Заманауи стоматологиялық клиникаларға арналған AI-диалогтар.", placeholder: "Мысалы: «Қабылдауға жазылуға бола ма?»", greeting: "Сәлеметсіз бе! Сізге қалай көмектесе аламын?", status: "Dentara тест жауабы"
  }
};

function applyLanguage(lang) {
  const t = translations[lang] || translations.en;
  const set = (selector, value) => { const element = document.querySelector(selector); if (element) element.innerHTML = value; };
  set(".nav-links a:nth-child(1)", t.navHow); set(".nav-links a:nth-child(2)", t.navFeatures); set(".nav-links a:nth-child(3)", t.navChannels);
  document.querySelectorAll(".button-dark, .button-primary").forEach((element) => { if (element.textContent.includes("Start") || element.textContent.includes("Начать") || element.textContent.includes("Тегін")) element.innerHTML = `${t.start} <span>↗</span>`; });
  set(".hero-copy .eyebrow", `<span class="status-dot"></span> ${t.heroEyebrow}`); set(".hero h1", t.heroTitle); set(".hero-subtitle", t.heroSubtitle); set(".hero-actions .text-link", `${t.seeHow} <span class="play-icon">▶</span>`); set(".trust-note>span", t.trust); set(".logo-strip .container>span", t.inbox);
  set(".process-section .eyebrow", t.how); set(".process-section h2", t.processTitle); set(".process-section .section-heading p", t.processIntro);
  document.querySelectorAll(".process-card h3").forEach((element, index) => element.textContent = t.steps[index]); document.querySelectorAll(".process-card p").forEach((element, index) => element.textContent = t.stepText[index]);
  set(".feature-layout .eyebrow", t.built); set(".feature-layout h2", t.featureTitle); set(".feature-layout .section-heading p", t.featureIntro); set(".feature-layout .text-link", `${t.explore} <span>↗</span>`);
  document.querySelectorAll(".feature-card h3").forEach((element, index) => { if (t.features[index]) element.textContent = t.features[index]; }); document.querySelectorAll(".feature-card p").forEach((element, index) => { if (t.featureText[index]) element.textContent = t.featureText[index]; });
  set(".demo-section .eyebrow", t.tryIt); set(".demo-section h2", t.demoTitle); set(".demo-section .section-heading p", t.demoIntro); document.querySelectorAll(".demo-points span").forEach((element, index) => element.textContent = t.demoPoints[index]);
  set(".channels-section .eyebrow", t.channelsEyebrow); set(".channels-section h2", t.channelsTitle); set(".channels-section .section-heading p", t.channelsIntro); document.querySelectorAll(".channel-list small").forEach((element) => element.textContent = t.planned);
  set(".benefits-section .eyebrow", t.better); set(".benefits-section h2", t.benefitsTitle); document.querySelectorAll(".benefits-grid h3").forEach((element, index) => element.textContent = t.benefits[index]); document.querySelectorAll(".benefits-grid p").forEach((element, index) => element.textContent = t.benefitText[index]);
  set(".cta-inner .eyebrow", t.ready); set(".cta-inner h2", t.ctaTitle); set(".cta-inner p", t.ctaText); document.querySelector(".footer-inner>span:nth-of-type(1)").textContent = t.footer;
  const inputElement = document.querySelector("#message-input"); if (inputElement) inputElement.placeholder = t.placeholder;
  const greeting = document.querySelector("#messages .received"); if (greeting && !greeting.dataset.custom) { greeting.firstChild.textContent = t.greeting; }
  document.documentElement.lang = lang === "kk" ? "kk" : lang; document.title = t.title;
  languageButtons.forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
  localStorage.setItem("dentara-language", lang);
}

languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
applyLanguage(localStorage.getItem("dentara-language") || "en");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("mobile-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("mobile-open"));
});

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  const time = document.createElement("span");
  time.className = "message-time";
  time.textContent = "just now";
  message.appendChild(time);
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "sent");
  input.value = "";
  input.disabled = true;
  status.textContent = "Dentara is thinking…";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, language: localStorage.getItem("dentara-language") || "en" }),
    });
    if (!response.ok) throw new Error("The chat service returned an error.");
    const data = await response.json();
    addMessage(data.reply, "received");
    status.textContent = translations[localStorage.getItem("dentara-language") || "en"].status;
  } catch (error) {
    addMessage("The demo is temporarily unavailable. Please try again in a moment.", "received");
    status.textContent = "Unable to reach the API";
  } finally {
    input.disabled = false;
    input.focus();
  }
});

