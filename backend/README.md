# iHerb Backend — FastAPI

## Setup

```bash
cd backend
uv venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
uv pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY
```

## Run

```bash
uv run uvicorn main:app --reload
# Server runs at http://localhost:8000
# API docs at http://localhost:8000/docs
```

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Health check |
| `POST` | `/api/chat` | Send message, get AI response |
| `GET` | `/api/chat/history/{session_id}` | Get conversation history |
| `DELETE` | `/api/chat/history/{session_id}` | Clear conversation session |

## Example Request

```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"session_id": "abc-123", "message": "I need help sleeping better"}'
```