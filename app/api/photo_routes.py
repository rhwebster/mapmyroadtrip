from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, JournalEntry, Photo, Trip, User

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/all')
#@login_required
def get_all_photos():
    #photos = Photo.query.join(JournalEntry).join(Trip).join(User).filter(User.id == userId).all()
    photos = Photo.query.all()

    if not photos:
        return {}, 404    
    photo_list = [photos.to_dict() for photo in photos]
    print("PHOTOS---->", photos)
    print("PHOTOLIST---->", photo_list)
    return { 'photos': photo_list }


@photo_routes.route('entries/<int:entry_id>/photos/')
@login_required
def get_photos():
    photos = Photo.query.filter(Photo.entry_id == entry_id).all()

    if not photos:
        return {}, 404
    photo_list = [photos.to_dict() for photo in photos]
    return {'photos': photo_list}


@photo_routes.route('/photos/<int:photo_id>')
@login_required
def get_photo():
    photo = Photo.query.get(photo_id)

    if not photo:
        return {}, 404
    photo_json = jsonify({'photo': photo.to_dict()})
    return photo_json


@photo_routes.route('/photos/<int:photo_id>', methods=['POST'])
@login_required
def new_photo():
    data = request.json

    try:
        photo = Photo(
            photos_url=data['photos_url']
        )
        db.session.add(photo)
        db.session.commit()
        return {'photo': photo.to_dict()}
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occurred while retrieving the data']}, 500


@photo_routes.route('/photos/<int:photo_id>', methods=['DELETE'])
@login_required
def delete_photo(photo_id):
    photo = Photo.query.get(photo_id)
    if photo:
        db.session.delete(photo)
        db.session.commit()
        return {'message': f'Photo Id: {photo.id} was successfully deleted'}
    else:
        return {'errors': f'Photo Id: {photo.id} could not be found'}
