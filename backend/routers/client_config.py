from fastapi import APIRouter
from services.llm import get_active_client_config

router = APIRouter(prefix="/api/client", tags=["client"])


@router.get("/config")
async def client_config():
    """Return public brand info for the active client."""
    cfg = get_active_client_config()
    return {
        "client_id":  cfg.client_id,
        "brand_name": cfg.brand_name,
        "tagline":    cfg.tagline,
    }