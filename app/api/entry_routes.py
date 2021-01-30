from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Trip, JournalEntry, Photo
from app.helpers import *



entry_routes = Blueprint('entry', __name__)


# GET a specific journal entry from a specific trip
@entry_routes.route('/<int:entry_id>', methods=['GET'])
@login_required
def entry(entry_id):
    entry = JournalEntry.query.get(entry_id)

    if not entry:
        return {}, 404
    entry_json = jsonify({'entry': entry.to_dict()})
    return entry_json


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
@entry_routes.route('/', methods=['GET','POST'])
@login_required
def new_entry():
    data = request.get_json(force=True)
    print('ROUTE DATA------>',data)

    entry = JournalEntry(
        title=data['title'],
        trip_id=data['tripId'],
        user_id=data['userId'],
        image=data['profPic'],
        entry=data['entry'],
        lat=data['lat'],
        lon=data['lon']
    )

    try:
        db.session.add(entry)
        db.session.commit()
        return {'added_journal_entry': str(entry)}
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occured while creating the journal entry']}, 500

@entry_routes.route('/<int:entry_id>', methods=['DELETE'])
@login_required
def delete_entry(entry_id):
    entry = JournalEntry.query.get(entry_id)
    if entry:
        db.session.delete(entry)
        db.session.commit()
        return {'message': f'Entry: {entry.title} was successfully deleted'}
    else:
        return {'errors': [f'Entry not found']}
