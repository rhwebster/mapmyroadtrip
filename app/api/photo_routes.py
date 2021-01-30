from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User, JournalEntry, Photo, Trip

photo_routes = Blueprint('trip', __name__)


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
            user_id=data['userId'],
            entry_id=data['entryId'],
            photos_url=data['photosUrl']
        )
        db.session.add(photo)
        db.session.commit()
        return {'photo': photo.to_dict()}
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occurred while creating the picture']}, 500


@photo_routes.route('/photos/<int:photo_id>', methods=['DELETE'])
@login_required
def delete_photo(photo_id):
    photo = Photo.query.get(photo_id)
    if photo:
        db.session.delete(photo)
        db.session.commit()
        return {'message': 'Photo was successfully deleted'}
    else:
        return {'errors': 'Photo could not be found'}
