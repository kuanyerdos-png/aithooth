import os
from dataclasses import dataclass

from dotenv import load_dotenv

load_dotenv()


@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv("APP_NAME", "Qerivo")
    cors_origins: list[str] = None

    def __post_init__(self) -> None:
        if self.cors_origins is None:
            object.__setattr__(
                self,
                "cors_origins",
                [origin.strip() for origin in os.getenv("CORS_ORIGINS", "*").split(",")],
            )


settings = Settings()


