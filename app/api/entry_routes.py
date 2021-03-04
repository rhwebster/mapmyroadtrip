from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Trip, JournalEntry, Photo
from app.helpers import *


entry_routes = Blueprint('entry', __name__)


# GET all journal entries
@entry_routes.route('/<int:id>', methods=['GET', 'DELETE'])
@login_required
def getAllJournalEntries(id):
    if request.method == 'GET':
        entries = JournalEntry.query.filter(JournalEntry.user_id == id).all()
        entry_list = [entry.to_dict() for entry in entries]

        print('JOURNAL ENTRIES------>', entry_list)

        return {'journalEntries': entry_list}
    if request.method == 'DELETE':
        entry = JournalEntry.query.get(entry_id)
        if entry:
            db.session.delete(entry)
            db.session.commit()
            return {'message': f'Entry: {entry.title} was successfully deleted'}
        else:
            return {'errors': [f'Entry not found']}


# GET all the photos for an entry
@entry_routes.route('/<int:entry_id>/photos')
@login_required
def get_entry_photos():
    photos = Photo.query.filter(Photo.entry_id == entry_id).all()

    if not photos:
        return {}, 404
    photo_list = [photos.to_dict() for photo in photos]
    return {'photos': photo_list}


#Create new journal entries
@entry_routes.route('/', methods=['GET', 'POST'])
@login_required
def entries():
    if request.method == 'GET':
        entries = JournalEntry.query.all()
        entry_list = [entry.to_dict() for entry in entries]
        return {'entries': entry_list}
    if request.method == 'POST':
        data = request.get_json(force=True)

        entry = JournalEntry(
            title=data['title'],
            trip_id=data['tripId'],
            image=data['profPic'],
            user_id=data['userId'],
            entry=data['entry'],
            lat=data['lat'],
            lon=data['lon']
        )

        entry.photos.append(Photo(user_id=data['userId'],
                            photos_url=data['profPic']))

        db.session.add(entry)
        db.session.commit()
        return {'added_journal_entry': entry.to_dict()}

@entry_routes.route('/<int:id>/coordinates')
@login_required
def get_coordinates(id):
    entries = JournalEntry.query.filter(JournalEntry.user_id == id).all()
    entry_list = [entry.get_coordinates() for entry in entries]
    return {'coordinates': entry_list}
