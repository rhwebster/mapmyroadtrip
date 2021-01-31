from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Trip, JournalEntry, Photo
from app.helpers import *



entry_routes = Blueprint('entry', __name__)

# GET all journal entries
@entry_routes.route('/<int:id>/entries', methods=['GET'])
@login_required
def getAllJournalEntries(id):
    entries = JournalEntry.query.join(User).filter(User.id == id).all()
    entry_list = [entry.get_all_data() for entry in entries]

    print('JOURNAL ENTRIES------>', entry_list)

    return {'journalEntries': entry_list}

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
        image=data['profPic'],
        user_id=data['userId'],
        entry=data['entry'],
        lat=data['lat'],
        lon=data['lon']
    )


    db.session.add(entry)
    photo = Photo(
        entry_id=1,
        user_id=data['userId'],
        photos_url=['profPic'])
    db.session.add(photo)
    db.session.commit()
    return {'added_journal_entry': str(entry)}
    # except SQLAlchemyError as e:
    #     error = str(e.__dict__['orig'])
    #     print(error)
    #     return {'errors': ['An error occured while creating the journal entry']}, 500

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
