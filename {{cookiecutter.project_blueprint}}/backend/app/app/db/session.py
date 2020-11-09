from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

# Postgresql Configuration
# engine = create_engine(settings.SQLALCHEMY_DATABASE_URI, pool_pre_ping=True)

# SQLLite Configuration
engine = create_engine(
    settings.SQLALCHEMY_DATABASE_URI,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
