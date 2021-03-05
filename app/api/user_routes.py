from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Trip, Photo, JournalEntry, db
from app.helpers import *
from werkzeug.utils import secure_filename


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>', methods=['GET', 'PATCH'])
@login_required
def user(id):
    if request.method == 'GET':
        user = User.query.get(id)
        return user.to_dict()
    if request.method == 'PATCH':
        user = User.query.get(id)
        data = request.get_json(force=True)
        print('ROUTE DATA------>', data)
        
        user.profile_pic = data['profPic']
        db.session.commit()
        return {'added_profile_pic': str(data['profPic'])}


# GET all trips associated with the user
@user_routes.route('/<int:user_id>/trips', methods=['GET'])
@login_required
def get_trips(user_id):
    trips = Trip.query.filter(Trip.user_id == user_id).all()
    trip_list = [trip.to_dict() for trip in trips]

    return {'trips': trip_list}
    

#GET all entries associated with the user
@user_routes.route('/<int:user_id>/entries', methods=['GET'])
@login_required
def all_entries(user_id):
    entries = JournalEntry.query.filter(JournalEntry.user_id == user_id).all()

    if not entries:
        return {}, 404
    entry_list = [entry.to_dict() for entry in entries]
    return jsonify({'payload': {'entries': entry_list}})


#GET all photos associated with the user
@user_routes.route('/<int:user_id>/photos', methods=['GET'])
@login_required
def get_photos(user_id):
    photos = Photo.query.filter(Photo.user_id == user_id).all()
    photo_list = [photo.get_photos() for photo in photos]
    
    return {'photos': photo_list}