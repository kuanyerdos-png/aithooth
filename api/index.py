import sys
from pathlib import Path

project_root = Path(__file__).resolve().parents[1]
backend_root = project_root / "backend"
if str(backend_root) not in sys.path:
    sys.path.insert(0, str(backend_root))

from app.main import app

