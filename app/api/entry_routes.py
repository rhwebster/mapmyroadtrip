from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Trip, JournalEntry

entry_routes = Blueprint('entry', __name__)

@entry_routes.route('trips/<int:trip_id>/entries')
@login_required
def entries(trip_id):
    entries = JournalEntry.query.filter(JournalEntry.trip_id == trip_id).all()

    if not entries:
        return {}, 404
    entry_list = [entries.to_dict() for entry in entries]
    return {'journal_entries': entry_list}

@entry_routes.route('entries/<int:entry_id>')
@login_required
def entry(entry_id):
    entry = JournalEntry.query.get(entry_id)

    if not entry:
        return {}, 404
    entry_json = jsonify({'entry': entry.to_dict()})
    return entry_json

@entry_routes.route('entries/<int:entry_id>', methods=['POST'])
@login_required
def new_entry():
    data = request.json

    try:
        entry = JournalEntry(
            title=data['title'],
            image=data['image'],
            entry=data['entry'],
            lat=data['lat'],
            lon=data['lon']
        )
        db.session.add(entry)
        db.session.commit()
        return entry
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occured while retrieving the data']}, 500

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
