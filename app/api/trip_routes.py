from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Trip, User

trip_routes = Blueprint('trips', __name__)

# GET all trips associated with the user
@trip_routes.route('users/<int:user_id>/trips')
@login_required
def get_trips(user_id):
    trips = Trip.query.filter(Trip.user_id == user_id).all()
    trip_list = [trip.to_dict() for trip in trips]
    if not trips:
        return {}, 404
    print(jsonify({'payload': {'trips': trip_list}}))
    return jsonify({'payload': {'trips': trip_list}})

#GET single trip associated with the user
@trip_routes.route('/<int:trip_id>')
@login_required
def get_a_trip(trip_id):
    trip = Trip.query.get(trip_id)

    if not trip:
        return {}, 404
    trip_json = jsonify({'trip': trip.to_dict()})
    return trip_json

#POST a trip associated with the user
@trip_routes.route('/users/<int:user_id/trips', methods=['POST'])
@login_required
def post_trip():
    data = request.json

    try:
        trip = Trip(
            title=data['title'],
            start_date=data['start_date'],
            end_date=data['end_date'],
            start_lat=data['start_lat'],
            start_lon=data['start_lon'],
            end_lat=data['end_lat'],
            end_lon=data['end_lon'],
            route=data['route'],
            private=data['private']
        )
        db.session.add(trip)
        db.session.commit()
        return {'trip': trip.to_dict()}
    except SQLAlchemyError as e:
        error = str(e.__dict__['orig'])
        print(error)
        return {'errors': ['An error occured while retrieving the data']}, 500

#Edit a specific trip
# @trip_routes.route('/trips/<int:trip_id>', methods=['PUT'])
# @login_required
# def edit_trip(trip_id):
#     data = request.json

#     trip = Trip.query.get(trip_id)
#     for 

#DELETE a specific trip associated with the user
@trip_routes.route('/trips/<int:trip_id>', methods=['DELETE'])
@login_required
def delete_trip(trip_id):
    trip = Trip.query.get(trip_id)

    if trip:
        db.session.delete(trip)
        db.session.commit()
        return {'message': f'Trip: {trip.title} was successfully deleted'}
    else:
        return {'errors': f'Trip: {trip.title} was not found'}
