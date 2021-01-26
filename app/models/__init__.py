from flask import Flask
from flask_migrate import Migrate
from .db import db
from .user import User
from .trip import Trip
from .photo import Photo
from .journal_entry import JournalEntry
from app.config import Config
import os

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)
