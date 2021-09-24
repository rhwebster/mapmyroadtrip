from flask import Blueprint, jsonify, request
from sqlalchemy import desc
from flask_login import login_required
from app.models import db, Trip, User, JournalEntry

trip_routes = Blueprint('trips', __name__)


#GET single trip
@trip_routes.route('/<int:trip_id>', methods=['GET'])
@login_required
def get_a_trip(trip_id):
    trip = Trip.query.get(trip_id)

    if not trip:
        return {}, 404
    trip_json = jsonify({'payload': {'trip': trip.to_dict()}})
    return trip_json


# GET all journal entries from a specific trip
@trip_routes.route('/<int:trip_id>/entries', methods=['GET'])
@login_required
def trip_entries(trip_id):
    entries = JournalEntry.query.filter(JournalEntry.trip_id == trip_id).all()
    entry_list = [entry.to_dict() for entry in entries]
    return {'tripEntries': entry_list}


#POST a trip
@trip_routes.route('/', methods=['POST'])
@login_required
def post_trip():
    data = request.get_json(force=True)
    
    trip = Trip(
        user_id=data['userId'],
        title=data['title'],
        start_date=data['startDate'],
        end_date=data['endDate'],
        start_lat=data['startLat'],
        start_lon=data['startLon'],
        end_lat=data['endLat'],
        end_lon=data['endLon'],
        route=data['route'],
        private=data['shared'])

    db.session.add(trip)
    db.session.commit()
    trip_json = jsonify({'payload': {'trip': trip.to_dict()}})
    return trip_json
    

#Edit a specific trip
@trip_routes.route('/<int:trip_id>', methods=['PUT', 'DELETE'])
@login_required
def edit_trip(trip_id):
    if request.method == 'PUT':
        data = request.json

        trip = Trip.query.get(trip_id)
        for key, value in data['db'].items():
            setattr(trip, key, value)

        try:
            db.session.commit()
            trip_json = jsonify({'payload': {'trips': trip.to_dict()}})
            return trip_json
        except SQLAlchemyError as e:
            error = str(e.__dict__['orig'])
            print(error)
            db.session.rollback()
            return {'errors': ['An error occurred while retrieving the data']}, 500
    if request.method == 'DELETE':
        trip = Trip.query.get(trip_id)

        if trip:
            db.session.delete(trip)
            db.session.commit()
            return {'message': f'Trip: {trip.title} was successfully deleted'}
        else:
            return {'errors': f'Trip: {trip.title} was not found'}
