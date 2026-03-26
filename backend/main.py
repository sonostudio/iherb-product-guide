from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from routers import chat, client_config

app = FastAPI(
    title="Conversational Product Guide",
    description="AI-powered product recommendation API",
    version="0.2.0",
)

# CORS — allow the React frontend during development
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.environ.get("CORS_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router)
app.include_router(client_config.router)


@app.get("/health")
async def health():
    client_id = os.environ.get("CLIENT", "dhc")
    return {"status": "ok", "client": client_id}