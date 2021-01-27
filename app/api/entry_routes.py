from flask import Blueprint, jsonify, required
from flask_login import login_required
from app.models import Trip, User, JournalEntry

entry_routes = Blueprint('entry', __name__)

@entry_routes.route('/<int:user_id>/<int:trip_id>/entries')
@login_required
def entries(trip_id):
    entries = JournalEntry.query.filter(JournalEntry.trip_id = trip_id).all()

    if not entries:
        return {}, 404
    entry_list = [entries.to_dict() for entry in entries]
    return {'journal_entries': entry_list}

@entry_routes.route('/<int:user_id>/<int:trip_id>/entries/<int:entry_id>')
@login_required
def entry(journal_entry_id):
    entry = JournalEntry.query.get(JournalEntry.id = entry_id)

    if not entry:
        return {}, 404
    return {'entry': entry}

@entry_routes.route('/<int:user_id>/<int:trip_id>/entries/<int:entry_id', methods=[POST])
@login_required
def new_entry():
    data = request.json
