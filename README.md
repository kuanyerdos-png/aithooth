# AITooth

AITooth is an MVP landing page and FastAPI starter for an AI assistant built for dental clinics. The included chat is a deterministic mock service, so it is safe to run locally without a paid AI provider.

## Run locally

```bash
cd backend
python -m venv .venv
# macOS/Linux: source .venv/bin/activate
# Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open http://localhost:8000. The API is available at `/api/health` and accepts chat messages at `POST /api/chat`.

## Languages

The landing page supports English, Russian, and Kazakh via the language switcher in the header. The selected language is remembered in the browser, and the demo chat sends the language to the mock API so sample replies can be localized.

## Project structure

- `backend/app/routers` contains HTTP route handlers.
- `backend/app/schemas` contains Pydantic request and response models.
- `backend/app/services` contains business logic. `MockChatService` can later be replaced by an OpenAI, Anthropic, or Groq adapter without changing the route.
- `frontend` contains framework-free HTML, CSS, and JavaScript.

Copy `.env.example` to `.env` to customize the app name or CORS origins. SQLite/PostgreSQL persistence is intentionally not required for this initial MVP; a repository layer can be introduced when clinic data is added.
