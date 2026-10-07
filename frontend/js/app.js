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
    navProduct: "Product", navHow: "How it works", navFeatures: "Features", navClinics: "For clinics",
    start: "Book a Demo", heroEyebrow: "AI patient reactivation for dental clinics",
    heroTitle: "Turn inactive patients into <em>appointments and revenue.</em>",
    heroSubtitle: "Dentara finds patients your clinic is losing, re-engages them through AI-powered conversations, and turns them into booked appointments.",
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
    footer: "AI patient reactivation and revenue recovery for dental clinics.", placeholder: "Try “Can I book an appointment?”", greeting: "Hi! What can I help you with today?", status: "Mock response from Dentara", valueStatement: "Your clinic already has the patients. <strong>We bring them back.</strong>", demoEyebrow: "Patient recovery conversation", demoTitle: "From conversation to <em>revenue.</em>", demoIntro: "See how Dentara turns a quiet patient into a confirmed appointment. Send a test message below to try the mock service.", demoPoints: ["✓ Personalized outreach", "✓ Appointment-ready handoff"], ctaEyebrow: "Pay for results", ctaTitle: "Recover the patients<br />you're <em>losing.</em>", ctaText: "Turn your existing patient database into booked appointments and measurable revenue.",
    recovery: {
      eyebrow: "Patient reactivation", title: "Turn inactive patients into <em>appointments and revenue.</em>", intro: "Dentara finds patients your clinic is losing, re-engages them through WhatsApp and other channels, and turns them into booked appointments.", link: "See revenue recovery",
      flow: [["Patient Database", "Existing history"], ["AI Analysis", "Find signals"], ["Lost Patients Found", "Ready to recover"], ["WhatsApp / AI Conversation", "Personalized outreach"], ["Appointment", "Patient returns"], ["Recovered Revenue", "Tracked in Dentara"]],
      segmentsEyebrow: "What Dentara sees", segmentsTitle: "Dentara finds the patients <em>you're losing.</em>", segmentsIntro: "Your database already contains demand. Dentara helps your team act on it.",
      segments: [["Unfinished Treatment", "Patients who started care but never completed the next step.", "High intent"], ["Missed Appointments", "Patients who missed a visit and never found their way back.", "Ready to return"], ["Overdue Check-ups", "Patients whose recall window has passed without a new booking.", "Timing signal"], ["Consultation Without Booking", "Patients who asked questions or consulted but did not convert.", "Unconverted"], ["Inactive Patients", "Patients who have gone quiet and may still need your care.", "Re-engage"]],
      workflowEyebrow: "The Dentara workflow", workflowTitle: "From patient database to <em>recovered revenue.</em>", workflowIntro: "A clear path from existing records to measurable clinic growth.",
      workflow: [["Connect your patient database", "Bring the patient history your clinic already has."], ["Dentara analyzes patient history", "Understand visits, treatments, recalls, and gaps."], ["AI identifies patients to recover", "Prioritize the conversations most likely to matter."], ["Dentara starts personalized conversations", "Reach patients through the channels they already use."], ["Patient books an appointment", "Make the next step simple and natural."], ["Clinic sees recovered revenue", "Track appointments, visits, and attributed value."]],
      dashboardEyebrow: "Revenue recovery dashboard", dashboardTitle: "Know what came back <em>because of Dentara.</em>", dashboardIntro: "This is a product visualization with demonstration data, not a customer result.", dashboardNote: "See exactly how many patients you recovered and how much revenue they generated.", dashboardLabel: "Revenue Recovery", dashboardLive: "● Live view", dashboardPeriod: "Recovery overview", dashboardRange: "Last 30 days⌄", metrics: [["Patients analyzed", "Database scan"], ["Patients to recover", "AI identified"], ["Conversations", "Started by Dentara"], ["Appointments", "Booked"], ["Visits", "Completed"], ["Recovered revenue", "Demonstration data"]], chart: "Recovered appointments", weeks: "Week 1     Week 2     Week 3     Week 4",
      whereEyebrow: "Where Dentara works", whereTitle: "Patients use their channels.<br /><em>Clinics use Dentara.</em>", whereIntro: "Dentara does not ask patients to visit a Dentara website. Patients keep chatting in the channels they already use, while your clinic works from one dashboard.", patientChannel: "Patient channel", comingSoon: "Coming soon", familiar: "Familiar channels", aiLayer: "AI layer", workspace: "Clinic workspace", dashboard: "Dashboard · CRM · MIS",
      builtEyebrow: "Built for dental workflows", builtTitle: "Not a generic chatbot.<br /><em>A system for the way clinics work.</em>", builtIntro: "Dentara is designed around real dental workflows, from treatment plans and recalls to no-shows and handoffs.", pillars: [["Patient history", "Work from the context already inside your patient database."], ["Treatment journeys", "Follow up on unfinished care and the next clinically relevant step."], ["Recall cycles", "Keep overdue check-ups visible without spreadsheet chasing."], ["Team handoffs", "Escalate complex conversations to the right clinic staff member."]]
    }
  },
  ru: {
    title: "Dentara — AI-ассистент для стоматологических клиник", navProduct: "Продукт", navHow: "Как это работает", navFeatures: "Возможности", navClinics: "Для клиник", start: "Забронировать демо",
    heroEyebrow: "Возврат пациентов с помощью AI", heroTitle: "Превращайте неактивных пациентов в <em>записи и выручку.</em>", heroSubtitle: "Dentara находит пациентов, которых теряет клиника, возвращает их в персональный AI-диалог и помогает записаться на приём.",
    seeHow: "Как это работает", trust: "Для загруженных стоматологических команд", inbox: "Единый умный inbox для", how: "Как это работает", processTitle: "От первого сообщения до <em>записи.</em>", processIntro: "Комфортнее для пациентов и больше времени для вашей команды.",
    steps: ["Пациент отправляет сообщение", "Dentara понимает и отвечает", "Запись или передача сотруднику"], stepText: ["Из привычного канала — днём и ночью.", "Полезные ответы в стиле вашей клиники, которые двигают диалог вперёд.", "Превращайте интерес в действие или подключайте сотрудника, когда это важно."],
    built: "Для вашей практики", featureTitle: "Меньше рутины.<br /><em>Больше заботы.</em>", featureIntro: "Dentara берёт на себя повседневные диалоги, чтобы команда уделяла внимание действительно важным моментам.", explore: "Изучить платформу",
    features: ["Возврат пациентов", "Восстановление лечения", "Атрибуция выручки", "Возврат после неявки", "Просроченный recall", "Возврат после консультации", "AI-диалоги", "Автоматические follow-up", "Запись на приём", "Передача сотруднику"], featureText: ["Находите неактивных пациентов и возвращайте их в диалог.", "Возвращайте пациентов, которые начали лечение, но не завершили его.", "Видите, какие диалоги стали записями, визитами и выручкой.", "Напоминайте о пропущенных визитах и помогайте вернуться.", "Находите пациентов, которым пора на check-up.", "Возвращайте пациентов, которые интересовались, но не записались.", "Начинайте полезные персональные диалоги в нужный момент.", "Автоматически продолжайте цепочки возврата.", "Превращайте интерес пациента в запись.", "Подключайте сотрудника, когда нужен человек."],
    tryIt: "Попробуйте", demoTitle: "Посмотрите, как Dentara <em>общается.</em>", demoIntro: "Отправьте тестовое сообщение и получите пример ответа. Сейчас используется простой mock-сервис — его легко подключить к базе знаний клиники.", demoPoints: ["✓ Дружелюбные ответы", "✓ Простая передача сотруднику"],
    recovery: {
      eyebrow: "Возврат пациентов", title: "Превращайте неактивных пациентов в <em>записи и выручку.</em>", intro: "Dentara находит пациентов, которых теряет клиника, возвращает их в диалог через WhatsApp и другие каналы и помогает записаться.", link: "Посмотреть возврат выручки",
      flow: [["База пациентов", "История лечения"], ["AI-анализ", "Поиск сигналов"], ["Потерянные пациенты найдены", "Готовы вернуться"], ["WhatsApp / AI-диалог", "Персональное сообщение"], ["Запись", "Пациент возвращается"], ["Возвращённая выручка", "Отслеживается в Dentara"]],
      segmentsEyebrow: "Что видит Dentara", segmentsTitle: "Dentara находит пациентов, <em>которых вы теряете.</em>", segmentsIntro: "В вашей базе уже есть спрос. Dentara помогает команде действовать вовремя.",
      segments: [["Незавершённое лечение", "Пациенты начали лечение, но не сделали следующий шаг.", "Высокий интерес"], ["Пропущенные записи", "Пациенты пропустили визит и не вернулись.", "Готовы вернуться"], ["Просроченные осмотры", "Срок планового повторного визита уже прошёл.", "Важный момент"], ["Консультация без записи", "Пациенты задавали вопросы, но не записались.", "Не конвертированы"], ["Неактивные пациенты", "Пациенты давно не выходили на связь, но им может требоваться лечение.", "Вернуть в диалог"]],
      workflowEyebrow: "Рабочий процесс Dentara", workflowTitle: "От базы пациентов до <em>возвращённой выручки.</em>", workflowIntro: "Понятный путь от существующих записей до роста клиники.",
      workflow: [["Подключите базу пациентов", "Используйте историю пациентов, которая уже есть у клиники."], ["Dentara анализирует историю", "Учитывайте визиты, лечение, recall и пробелы."], ["AI находит пациентов для возврата", "Выделяйте диалоги с наибольшим потенциалом."], ["Dentara начинает персональные диалоги", "Общайтесь с пациентами в привычных каналах."], ["Пациент записывается", "Сделайте следующий шаг простым и естественным."], ["Клиника видит возвращённую выручку", "Отслеживайте записи, визиты и ценность обращений."]],
      dashboardEyebrow: "Панель возврата выручки", dashboardTitle: "Знайте, что вернулось <em>благодаря Dentara.</em>", dashboardIntro: "Это демонстрация интерфейса продукта, а не реальный результат клиента.", dashboardNote: "Смотрите, сколько пациентов вернулось и какую выручку они принесли.", dashboardLabel: "Возврат выручки", dashboardLive: "● Онлайн", dashboardPeriod: "Обзор возврата", dashboardRange: "Последние 30 дней⌄", metrics: [["Пациентов проанализировано", "Сканирование базы"], ["Пациентов для возврата", "Найдено AI"], ["Диалогов", "Начато Dentara"], ["Записей", "Создано"], ["Визитов", "Завершено"], ["Возвращённая выручка", "Демонстрационные данные"]], chart: "Возвращённые записи", weeks: "Неделя 1     Неделя 2     Неделя 3     Неделя 4",
      whereEyebrow: "Где работает Dentara", whereTitle: "Пациенты используют привычные каналы.<br /><em>Клиника использует Dentara.</em>", whereIntro: "Пациентам не нужно заходить на сайт Dentara. Они общаются в привычных каналах, а клиника работает из одной панели.", patientChannel: "Канал пациента", comingSoon: "Скоро", familiar: "Привычные каналы", aiLayer: "AI-слой", workspace: "Рабочее пространство клиники", dashboard: "Панель · CRM · МИС",
      builtEyebrow: "Создано для стоматологии", builtTitle: "Не обычный чат-бот.<br /><em>Система для работы клиники.</em>", builtIntro: "Dentara учитывает реальные процессы: планы лечения, recall, пропущенные визиты и передачу сотрудникам.", pillars: [["История пациента", "Работайте с контекстом, который уже есть в базе пациентов."], ["Путь лечения", "Возвращайте пациентов к незавершённому лечению и следующему шагу."], ["Recall-циклы", "Контролируйте просроченные осмотры без таблиц и ручной проверки."], ["Передача команде", "Передавайте сложные диалоги нужному сотруднику клиники."]]
    },
    channelsEyebrow: "Будьте там, где пациенты", channelsTitle: "Один ассистент.<br /><em>Каждый канал.</em>", channelsIntro: "Dentara объединяет общение с пациентами в привычных для них каналах.", planned: "Канал запланирован", better: "Лучшая регистратура", benefitsTitle: "Освободите время для <em>главного.</em>",
    benefits: ["Отвечайте быстрее", "Получайте больше обращений", "Сократите рутину", "Не упускайте пациентов", "Дайте команде сосредоточиться на пациентах"], benefitText: ["Каждый пациент получает первый ответ без ожидания.", "Продолжайте диалог, пока интерес максимален.", "Поручите Dentara повторяющиеся вопросы.", "Оставайтесь на связи после закрытия клиники.", "Оставьте команде время для заботы и экспертизы."], ready: "Готовы начать?", ctaTitle: "Превращайте диалоги<br />в <em>записи.</em>", ctaText: "Создайте лучший опыт для пациентов уже сегодня.", footer: "AI-возврат пациентов и выручки для стоматологических клиник.", placeholder: "Например: «Можно записаться на приём?»", greeting: "Здравствуйте! Чем я могу помочь?", status: "Тестовый ответ Dentara", valueStatement: "У вашей клиники уже есть пациенты. <strong>Мы возвращаем их.</strong>", demoEyebrow: "Диалог по возврату пациента", demoTitle: "От диалога к <em>выручке.</em>", demoIntro: "Посмотрите, как Dentara возвращает неактивного пациента к подтверждённой записи. Отправьте тестовое сообщение и попробуйте mock-сервис.", demoPoints: ["✓ Персональное обращение", "✓ Готовая запись для команды"], ctaEyebrow: "Оплата за результат", ctaTitle: "Возвращайте пациентов,<br />которых вы <em>теряете.</em>", ctaText: "Превратите существующую базу пациентов в записи и измеримую выручку."
  },
  kk: {
    title: "Dentara — стоматологиялық клиникаларға арналған AI-ассистент", navProduct: "Өнім", navHow: "Қалай жұмыс істейді", navFeatures: "Мүмкіндіктер", navClinics: "Клиникаларға", start: "Демоға жазылу",
    heroEyebrow: "Стоматологияға арналған AI-пациент қайтару жүйесі", heroTitle: "Белсенді емес пациенттерді <em>жазылу мен түсімге айналдырыңыз.</em>", heroSubtitle: "Dentara клиника жоғалтып жатқан пациенттерді тауып, AI-диалог арқылы қайта сөйлесіп, қабылдауға жазылуына көмектеседі.",
    seeHow: "Қалай жұмыс істейді", trust: "Стоматологиялық командалар үшін", inbox: "Бір ақылды inbox —", how: "Қалай жұмыс істейді", processTitle: "Алғашқы хабарламадан <em>жазылуға дейін.</em>", processIntro: "Пациенттерге ыңғайлы, командаңызға көбірек уақыт.", steps: ["Пациент хабарлама жібереді", "Dentara түсініп, жауап береді", "Қабылдауға жазылу немесе қызметкерге беру"], stepText: ["Пациент қолданатын арнадан, кез келген уақытта.", "Диалогты алға жылжытатын пайдалы әрі нақты жауаптар.", "Қызығушылықты әрекетке айналдырыңыз немесе қажет кезде маманды қосыңыз."],
    built: "Клиникаңыз үшін", featureTitle: "Қайталанатын жұмыс аз.<br /><em>Қамқорлық көп.</em>", featureIntro: "Dentara күнделікті диалогтарды жүргізеді, ал командаңыз маңызды сәттерге назар аударады.", explore: "Платформаны зерттеу", features: ["Пациенттерді қайтару", "Емді қалпына келтіру", "Түсімді атрибуциялау", "Келмегендерді қайтару", "Мерзімі өткен recall", "Кеңестен кейін қайтару", "AI-диалогтар", "Автоматты follow-up", "Қабылдауға жазу", "Қызметкерге беру"], featureText: ["Белсенді емес пациенттерді тауып, диалогқа қайтарыңыз.", "Емді бастап, аяқтамаған пациенттермен қайта байланысыңыз.", "Қай диалог жазылуға, визитке және түсімге айналғанын көріңіз.", "Келмеген пациенттерге қайта жазып, оралуын жеңілдетіңіз.", "Тексерілу уақыты өткен пациенттерді көрсетіңіз.", "Сұрақ қойып, бірақ жазылмаған пациенттерді қайтарыңыз.", "Дер кезінде пайдалы, жеке диалог бастаңыз.", "Қайтару тізбегін автоматты жалғастырыңыз.", "Пациент қызығушылығын нақты жазылуға айналдырыңыз.", "Адам көмегі керек кезде қызметкерді қосыңыз."],
    tryIt: "Қазір көріңіз", demoTitle: "Dentara қалай <em>сөйлесетінін</em> көріңіз.", demoIntro: "Тест хабарламасын жіберіп, жауап үлгісін көріңіз. Бұл демо қарапайым mock-сервисті қолданады — кейін клиника білім базасына дайын.", demoPoints: ["✓ Пациентке ыңғайлы жауаптар", "✓ Қызметкерге беруге дайын"],
    channelsEyebrow: "Пациенттер бар жерде болыңыз", channelsTitle: "Бір ассистент.<br /><em>Барлық арнада.</em>", channelsIntro: "Dentara пациенттер қолданатын арналардағы диалогтарды бір жерге жинауға арналған.", planned: "Жоспарланған арна", better: "Жақсырақ регистратура", benefitsTitle: "Маңызды нәрсеге <em>уақыт бөліңіз.</em>",
    benefits: ["Жылдам жауап беріңіз", "Көбірек өтініш қабылдаңыз", "Қайталанатын жұмысты азайтыңыз", "Бірде-бір пациентті жіберіп алмаңыз", "Команда пациенттерге назар аударсын"], benefitText: ["Әр пациентке күттірмей алғашқы жауап беріңіз.", "Қызығушылық жоғары кезде диалогты жалғастырыңыз.", "Күнделікті сұрақтарды Dentara-қа тапсырыңыз.", "Жұмыс уақытынан кейін де байланыста болыңыз.", "Команда уақыты қамқорлық пен тәжірибеге жұмсалсын."], ready: "Бастауға дайынсыз ба?", ctaTitle: "Көбірек диалогты<br /><em>қабылдауға айналдырыңыз.</em>", ctaText: "Пациенттерге жақсы тәжірибені бүгін бастаңыз.", footer: "Стоматологиялық клиникаларға арналған AI-пациент қайтару және түсім жүйесі.", placeholder: "Мысалы: «Қабылдауға жазылуға бола ма?»", greeting: "Сәлеметсіз бе! Сізге қалай көмектесе аламын?", status: "Dentara тест жауабы", valueStatement: "Клиникаңызда пациенттер қазірдің өзінде бар. <strong>Біз оларды қайтарамыз.</strong>", demoEyebrow: "Пациентті қайтару диалогы", demoTitle: "Диалогтан <em>түсімге дейін.</em>", demoIntro: "Dentara белсенді емес пациентті расталған қабылдауға қалай қайтаратынын көріңіз. Тест хабарламасын жіберіп, mock-сервисті қолданып көріңіз.", demoPoints: ["✓ Жеке хабарлама", "✓ Командаға дайын жазылу"], ctaEyebrow: "Нәтиже үшін төлеңіз", ctaTitle: "Жоғалтып жатқан<br /><em>пациенттерді қайтарыңыз.</em>", ctaText: "Қолдағы пациенттер базасын жазылулар мен өлшенетін түсімге айналдырыңыз.",
    recovery: {
      eyebrow: "Пациенттерді қайтару", title: "Белсенді емес пациенттерді <em>жазылу мен түсімге айналдырыңыз.</em>", intro: "Dentara клиника жоғалтып жатқан пациенттерді тауып, WhatsApp және басқа арналар арқылы қайта сөйлесуге шақырып, қабылдауға жазылуына көмектеседі.", link: "Түсімді қайтаруды көру",
      flow: [["Пациенттер базасы", "Қолдағы тарих"], ["AI талдауы", "Белгілерді табу"], ["Жоғалған пациенттер табылды", "Қайтуға дайын"], ["WhatsApp / AI диалогы", "Жеке хабарлама"], ["Қабылдауға жазылу", "Пациент қайтады"], ["Қайтарылған түсім", "Dentara-да бақыланады"]],
      segmentsEyebrow: "Dentara нені көреді", segmentsTitle: "Dentara <em>жоғалтып жатқан</em> пациенттерді табады.", segmentsIntro: "Базаңызда сұраныс қазірдің өзінде бар. Dentara командаңызға дер кезінде әрекет етуге көмектеседі.",
      segments: [["Аяқталмаған ем", "Емді бастап, келесі қадамға өтпеген пациенттер.", "Қызығушылығы жоғары"], ["Келмей қалғандар", "Қабылдауға келмей, қайта оралмаған пациенттер.", "Қайтуға дайын"], ["Мерзімі өткен тексеру", "Жоспарлы тексеру уақыты өтіп кеткен пациенттер.", "Уақыт сигналы"], ["Кеңес алып, жазылмағандар", "Сұрақ қойып, бірақ қабылдауға жазылмаған пациенттер.", "Айналым болмады"], ["Белсенді емес пациенттер", "Ұзақ уақыт хабарласпаған, бірақ ем қажет болуы мүмкін пациенттер.", "Диалогқа қайтару"]],
      workflowEyebrow: "Dentara жұмыс процесі", workflowTitle: "Пациенттер базасынан <em>қайтарылған түсімге дейін.</em>", workflowIntro: "Қолдағы жазбалардан клиника өсіміне дейінгі түсінікті жол.",
      workflow: [["Пациенттер базасын қосыңыз", "Клиникаңызда бар пациент тарихын пайдаланыңыз."], ["Dentara тарихты талдайды", "Визиттерді, емді, recall және үзілістерді түсініңіз."], ["AI қайтарылатын пациенттерді табады", "Ең маңызды диалогтарды бірінші орынға қойыңыз."], ["Dentara жеке диалог бастайды", "Пациенттер қолданатын арналар арқылы байланысыңыз."], ["Пациент қабылдауға жазылады", "Келесі қадамды жеңіл әрі табиғи етіңіз."], ["Клиника қайтарылған түсімді көреді", "Жазылуларды, визиттерді және нәтижені бақылаңыз."]],
      dashboardEyebrow: "Түсімді қайтару панелі", dashboardTitle: "Dentara арқасында <em>не қайтқанын біліңіз.</em>", dashboardIntro: "Бұл — өнім интерфейсінің демонстрациясы, нақты клиент нәтижесі емес.", dashboardNote: "Қанша пациент қайтқанын және қанша түсім әкелгенін нақты көріңіз.", dashboardLabel: "Түсімді қайтару", dashboardLive: "● Онлайн", dashboardPeriod: "Қайтару шолуы", dashboardRange: "Соңғы 30 күн⌄", metrics: [["Талданған пациенттер", "База сканы"], ["Қайтарылатын пациенттер", "AI анықтады"], ["Диалогтар", "Dentara бастады"], ["Жазылулар", "Рәсімделді"], ["Визиттер", "Аяқталды"], ["Қайтарылған түсім", "Демонстрациялық дерек"]], chart: "Қайтарылған жазылулар", weeks: "1-апта     2-апта     3-апта     4-апта",
      whereEyebrow: "Dentara қайда жұмыс істейді", whereTitle: "Пациенттер өз арналарын қолданады.<br /><em>Клиника Dentara-ны қолданады.</em>", whereIntro: "Пациентке Dentara сайтына кірудің қажеті жоқ. Ол үйреншікті арнасында сөйлеседі, ал клиника бір панельден жұмыс істейді.", patientChannel: "Пациент арнасы", comingSoon: "Жақында", familiar: "Үйреншікті арналар", aiLayer: "AI қабаты", workspace: "Клиника жұмыс кеңістігі", dashboard: "Панель · CRM · МИС",
      builtEyebrow: "Стоматологияға арналған", builtTitle: "Бұл жай чат-бот емес.<br /><em>Клиника жұмысына арналған жүйе.</em>", builtIntro: "Dentara ем жоспары, recall, келмей қалғандар және қызметкерге беру сияқты нақты процестерге бейімделген.", pillars: [["Пациент тарихы", "Пациенттер базасында бар контекстпен жұмыс істеңіз."], ["Емдеу жолы", "Аяқталмаған ем мен келесі маңызды қадамды бақылаңыз."], ["Recall циклдері", "Мерзімі өткен тексерулерді кестесіз бақылаңыз."], ["Командаға беру", "Күрделі диалогты тиісті клиника қызметкеріне жіберіңіз."]]
    }
  }
};

function applyLanguage(lang) {
  const t = translations[lang] || translations.en;
  const set = (selector, value) => { const element = document.querySelector(selector); if (element) element.innerHTML = value; };
  set(".nav-links a:nth-child(1)", t.navProduct); set(".nav-links a:nth-child(2)", t.navHow); set(".nav-links a:nth-child(3)", t.navFeatures); set(".nav-links a:nth-child(4)", t.navClinics);
  document.querySelectorAll(".button-dark, .button-primary, .button-light").forEach((element) => { element.innerHTML = `${t.start} <span>↗</span>`; });
  set(".hero-copy .eyebrow", `<span class="status-dot"></span> ${t.heroEyebrow}`); set(".hero h1", t.heroTitle); set(".hero-subtitle", t.heroSubtitle); set(".hero-actions .text-link", `${t.seeHow} <span class="play-icon">▶</span>`); set(".hero-value", t.valueStatement); set(".logo-strip .container>span", t.inbox);
  set(".process-section .eyebrow", t.how); set(".process-section h2", t.processTitle); set(".process-section .section-heading p", t.processIntro);
  document.querySelectorAll(".process-card h3").forEach((element, index) => element.textContent = t.steps[index]); document.querySelectorAll(".process-card p").forEach((element, index) => element.textContent = t.stepText[index]);
  set(".feature-layout .eyebrow", t.built); set(".feature-layout h2", t.featureTitle); set(".feature-layout .section-heading p", t.featureIntro); set(".feature-layout .text-link", `${t.explore} <span>↗</span>`);
  document.querySelectorAll(".feature-card h3").forEach((element, index) => { if (t.features[index]) element.textContent = t.features[index]; }); document.querySelectorAll(".feature-card p").forEach((element, index) => { if (t.featureText[index]) element.textContent = t.featureText[index]; });
  const r = t.recovery;
  set("#recovery .eyebrow", r.eyebrow); set("#recovery h2", r.title); set("#recovery .section-heading p", r.intro); set("#recovery .text-link", `${r.link} <span>↗</span>`);
  document.querySelectorAll("#recovery .flow-node").forEach((element, index) => { element.querySelector("strong").textContent = r.flow[index][0]; element.querySelector("small").textContent = r.flow[index][1]; });
  set(".segments-section .eyebrow", r.segmentsEyebrow); set(".segments-section h2", r.segmentsTitle); set(".segments-section .section-heading p", r.segmentsIntro);
  document.querySelectorAll(".segment-card").forEach((element, index) => { element.querySelector("h3").textContent = r.segments[index][0]; element.querySelector("p").textContent = r.segments[index][1]; element.querySelector(".segment-signal").textContent = r.segments[index][2]; });
  set(".workflow-section .eyebrow", r.workflowEyebrow); set(".workflow-section h2", r.workflowTitle); set(".workflow-section .section-heading p", r.workflowIntro);
  document.querySelectorAll(".workflow-grid article").forEach((element, index) => { element.querySelector("h3").textContent = r.workflow[index][0]; element.querySelector("p").textContent = r.workflow[index][1]; });
  set(".dashboard-copy .eyebrow", r.dashboardEyebrow); set(".dashboard-copy h2", r.dashboardTitle); set(".dashboard-copy p", r.dashboardIntro); set(".dashboard-note", r.dashboardNote); set(".dashboard-top span", `${r.dashboardLabel} <i>${r.dashboardLive}</i>`); set(".dashboard-period", `${r.dashboardPeriod} <b>${r.dashboardRange}</b>`); set(".dashboard-chart>span", r.chart); set(".dashboard-chart>small", r.weeks);
  document.querySelectorAll(".metrics-grid>div").forEach((element, index) => { element.querySelector("small").textContent = r.metrics[index][0]; element.querySelector(".metric-up").textContent = r.metrics[index][1]; });
  set(".demo-section .eyebrow", t.demoEyebrow || t.tryIt); set(".demo-section h2", t.demoTitle); set(".demo-section .section-heading p", t.demoIntro); document.querySelectorAll(".demo-points span").forEach((element, index) => element.textContent = t.demoPoints[index]);
  set(".channels-section .eyebrow", r.whereEyebrow); set(".channels-section h2", r.whereTitle); set(".channels-section .section-heading p", r.whereIntro);
  document.querySelectorAll(".channel-list>div").forEach((element, index) => { element.querySelector("small").textContent = index === 3 ? r.comingSoon : r.patientChannel; });
  document.querySelectorAll(".channel-architecture .architecture-node").forEach((element, index) => { const labels = [[r.patientChannel, "Patient"], [r.familiar, "WhatsApp · Telegram · Instagram"], [r.aiLayer, "Dentara AI"], [r.workspace, r.dashboard]]; element.querySelector("small").textContent = labels[index][0]; element.querySelector("strong").textContent = labels[index][1]; });
  set(".workflows-section .eyebrow", r.builtEyebrow); set(".workflows-section h2", r.builtTitle); set(".workflows-section .section-heading p", r.builtIntro);
  document.querySelectorAll(".workflow-pillars>div").forEach((element, index) => { element.querySelector("h3").textContent = r.pillars[index][0]; element.querySelector("p").textContent = r.pillars[index][1]; });
  set(".benefits-section .eyebrow", t.better); set(".benefits-section h2", t.benefitsTitle); document.querySelectorAll(".benefits-grid h3").forEach((element, index) => element.textContent = t.benefits[index]); document.querySelectorAll(".benefits-grid p").forEach((element, index) => element.textContent = t.benefitText[index]);
  set(".cta-inner .eyebrow", t.ctaEyebrow || t.ready); set(".cta-inner h2", t.ctaTitle); set(".cta-inner p", t.ctaText); document.querySelector(".footer-inner>span:nth-of-type(1)").textContent = t.footer;
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
