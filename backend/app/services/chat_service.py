"""Mock chat service for the Qerivo demo.

Replies are deterministic so the demo works without a paid AI provider.
Later, replace `MockChatService` with an OpenAI / Anthropic adapter that has the
same `reply_to(message, language)` method; the route does not need to change.
"""

# Intents are checked in order; the first one whose keyword appears wins.
INTENTS = [
    ("stop", {
        "en": ["stop", "unsubscribe", "don't write"],
        "ru": ["стоп", "не пишите", "отпишите"],
        "kk": ["тоқта", "жазбаңыз", "стоп"],
    }),
    ("pain", {
        "en": ["hurt", "pain", "ache", "swollen"],
        "ru": ["болит", "боль", "опухл", "флюс"],
        "kk": ["ауыр", "сыздайды", "ісіп"],
    }),
    ("price", {
        "en": ["price", "cost", "how much", "expensive"],
        "ru": ["цен", "стоим", "сколько", "дорого"],
        "kk": ["баға", "бағасы", "құн", "қанша", "қымбат"],
    }),
    ("think", {
        "en": ["think", "maybe", "later", "not sure"],
        "ru": ["подума", "позже", "потом", "не уверен"],
        "kk": ["ойлан", "кейін", "білмеймін"],
    }),
    ("time", {
        "en": ["thursday", "friday", "monday", "tuesday", "wednesday", "after", "evening", "time", "book", "appointment", "yes"],
        "ru": ["четверг", "пятниц", "понедельник", "вторник", "сред", "после", "вечер", "время", "запис", "да"],
        "kk": ["бейсенбі", "жұма", "дүйсенбі", "сейсенбі", "сәрсенбі", "кейін", "кеш", "уақыт", "жаз", "иә", "ия"],
    }),
    ("hello", {
        "en": ["hello", "hi", "hey"],
        "ru": ["привет", "здравств"],
        "kk": ["сәлем", "салем", "сәлеметсіз"],
    }),
]

REPLIES = {
    "en": {
        "stop": "Understood, I will not write to you again. Thank you, and take care of your smile!",
        "pain": "I'm sorry to hear that. Let's not wait: the earliest free time is today at 17:30 or tomorrow at 09:00. Which one suits you? I am also letting our administrator know.",
        "price": "A check-up with a consultation usually costs from 8,000 to 15,000 ₸, depending on what is needed. The doctor will give an exact price after the examination. Shall I find you a time this week?",
        "think": "Of course, no rush. May I ask what worries you most — the price, the time, or the treatment itself? I can help with any of them, or simply hold a time for you.",
        "time": "Thursday at 18:30 or Friday at 19:00 are free. Which one works better? As soon as you choose, I will confirm the booking.",
        "hello": "Hello! I'm Qerivo, the clinic's assistant. I can answer questions and book you in. What would you like to know?",
        "default": "Thank you for your message! I can tell you about prices, treatment and free times. Would you like me to find you a time this week?",
    },
    "ru": {
        "stop": "Хорошо, больше не буду писать. Спасибо и берегите улыбку!",
        "pain": "Сочувствую. Давайте не будем откладывать: ближайшее время — сегодня в 17:30 или завтра в 09:00. Что вам удобнее? Я также сообщаю администратору.",
        "price": "Осмотр с консультацией обычно стоит от 8 000 до 15 000 ₸ — зависит от того, что потребуется. Точную цену врач назовёт после осмотра. Подобрать вам время на этой неделе?",
        "think": "Конечно, не торопитесь. Подскажите, что вас больше всего смущает — цена, время или само лечение? Я помогу с любым вопросом или просто придержу для вас время.",
        "time": "Свободно в четверг в 18:30 или в пятницу в 19:00. Что вам удобнее? Как только выберете, я подтвержу запись.",
        "hello": "Здравствуйте! Я Qerivo, ассистент клиники. Могу ответить на вопросы и записать вас на приём. Что вас интересует?",
        "default": "Спасибо за сообщение! Могу рассказать о ценах, лечении и свободном времени. Подобрать вам время на этой неделе?",
    },
    "kk": {
        "stop": "Түсінемін, енді жазбаймын. Рақмет, күлкіңізді сақтаңыз!",
        "pain": "Қиын болды ғой. Кейінге қалдырмайық: ең жақын уақыт — бүгін 17:30 немесе ертең 09:00. Қайсысы ыңғайлы? Әкімшіге де хабарлап жатырмын.",
        "price": "Кеңесі бар тексеру әдетте 8 000-нан 15 000 ₸-ге дейін тұрады — не қажет екеніне байланысты. Нақты бағаны дәрігер қараудан кейін айтады. Осы аптаға уақыт тауып берейін бе?",
        "think": "Әрине, асықпаңыз. Сізді не көбірек алаңдатады — бағасы, уақыты әлде емнің өзі? Кез келгенімен көмектесемін немесе уақытты сізге ұстап тұрамын.",
        "time": "Бейсенбі 18:30 немесе жұма 19:00 бос. Қайсысы ыңғайлы? Таңдағаныңызбен жазылуды растаймын.",
        "hello": "Сәлеметсіз бе! Мен Qerivo, клиниканың көмекшісімін. Сұрақтарға жауап беріп, қабылдауға жаза аламын. Не қызықтырады?",
        "default": "Хабарламаңызға рақмет! Баға, ем және бос уақыт туралы айта аламын. Осы аптаға уақыт тауып берейін бе?",
    },
}


class MockChatService:
    def reply_to(self, message: str, language: str = "en") -> str:
        lang = language if language in REPLIES else "en"
        text = message.lower()
        for intent, keywords in INTENTS:
            if any(word in text for word in keywords[lang]):
                return REPLIES[lang][intent]
        return REPLIES[lang]["default"]


chat_service = MockChatService()
