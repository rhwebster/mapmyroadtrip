from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, JournalEntry, Trip, Photo

map_routes = Blueprint('map', __name__)



