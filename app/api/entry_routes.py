from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Trip, JournalEntry
from app.helpers import *



entry_routes = Blueprint('entry', __name__)

# GET all journal entries from a specific trip
@entry_routes.route('trips/<int:trip_id>/entries')
@login_required
def entries(trip_id):
    entries = JournalEntry.query.filter(JournalEntry.trip_id == trip_id).all()

    if not entries:
        return {}, 404
    entry_list = [entries.to_dict() for entry in entries]
    return {'journal_entries': entry_list}

# GET a specific journal entry from a specific trip
@entry_routes.route('entries/<int:entry_id>')
@login_required
def entry(entry_id):
    entry = JournalEntry.query.get(entry_id)

    if not entry:
        return {}, 404
    entry_json = jsonify({'entry': entry.to_dict()})
    return entry_json


@entry_routes.route('/entries', methods=['GET','POST'])
@login_required
def new_entry():
    data = request.get_json(force=True)
    print('ROUTE DATA------>',data)

    entry = JournalEntry(
        title=data['title'],
        trip_id=data['tripId'],
        image=data['profPic'],
        entry=data['entry'],
        lat=data['lat'],
        lon=data['lon']
    )
    db.session.add(entry)
    db.session.commit()
    return {'added_journal_entry': str(entry)}

@entry_routes.route('/entries/<int:entry_id>', methods=['DELETE'])
@login_required
def delete_entry(entry_id):
    entry = JournalEntry.query.get(entry_id)
    if entry:
        db.session.delete(entry)
        db.session.commit()
        return {'message': f'Entry: {entry.title} was successfully deleted'}
    else:
        return {'errors': [f'Entry not found']}
