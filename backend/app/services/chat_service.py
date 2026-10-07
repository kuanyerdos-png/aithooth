class MockChatService:
    """Temporary deterministic responder; replace with an LLM adapter later."""

    def reply_to(self, message: str, language: str = "en") -> str:
        normalized = message.lower()
        if language == "ru":
            if "цен" in normalized or "стоим" in normalized:
                return "Буду рад помочь с ценами. Они зависят от процедуры и ваших целей. Хотите записаться на консультацию?"
            if "запис" in normalized or "приём" in normalized:
                return "Конечно! В какой день и время вам удобно? Сотрудник клиники подтвердит запись."
            if "привет" in normalized or "здрав" in normalized:
                return "Здравствуйте! Я Dentara, ассистент клиники. Могу ответить на вопросы или помочь с записью."
            return "Спасибо за сообщение! Я помогу с вопросами о лечении, записью и дальнейшими шагами."
        if language == "kk":
            if "баға" in normalized or "құн" in normalized:
                return "Баға туралы көмектесуге қуаныштымын. Ол ем түрі мен мақсатыңызға байланысты. Кеңес алуға жазылайық па?"
            if "жазыл" in normalized or "қабылдау" in normalized:
                return "Әрине! Сізге қай күн мен уақыт ыңғайлы? Клиника қызметкері жазылуды растайды."
            if "сәлем" in normalized or "салем" in normalized:
                return "Сәлеметсіз бе! Мен Dentara, клиника ассистентімін. Сұрақтарға жауап беріп, қабылдауға жазуға көмектесемін."
            return "Хабарламаңызға рақмет! Ем, қабылдауға жазылу және келесі қадамдар туралы көмектесе аламын."
        if "price" in normalized or "cost" in normalized:
            return (
                "I'd be happy to help with pricing. It depends on the treatment and your goals. "
                "Would you like to book a quick consultation so the clinic can give you a tailored estimate?"
            )
        if "book" in normalized or "appointment" in normalized:
            return (
                "Absolutely — I can help you get started. What day and time usually work best for "
                "you? A member of the clinic team can confirm the appointment."
            )
        if "hello" in normalized or "hi" in normalized:
            return (
                "Hi! I'm Dentara, your clinic assistant. I can answer questions or help you request "
                "an appointment. What can I help with today?"
            )
        return (
            "Thanks for reaching out! I can help with treatment questions, appointment requests, "
            "and next steps. Tell me a little more about what you need."
        )


chat_service = MockChatService()


