from flask import Blueprint, jsonify, required
from flask_login import login_required
from app.models import Trip, User

trip_routes = Blueprint('trip', __name__)


@trip_routes.route('/<int:user_id>/trips')
@login_required
def get_trips(user_id):
    trips = Trips.query.filter(Trip.user_id == user_id).all()
    if not trips:
        return {}, 404
    trip_list = [trips.to_dict() for trip in trips]
    return {'trips': trip_list} 

@trip_routes.route('/int:user_id>/trips/<int:trip_id>')
@login_required
def get_a_trip(trip_id):
    trip = Trips.query.get(Trip.id = trip_id)
    if not trip:
        return {}, 404
    trip_json = jsonify({'trip': trip.to_dict()})
    return trip_json

@trip_routes.route('/<int:user_id>/trips', methods=['POST'])
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

@trip_routes.route('/<int:user_id>/trips/<int:trip_id>', methods=['DELETE'])
@login_required
def delete_trip(trip_id):
    trip = Trips.query.get(Trip.id = trip_id)

    if trip:
        db.session.delete(trip)
        db.session.commit()
        return {'message': f'Trip: {trip.title} was successfully deleted'}
    else:
        return {'errors': f'Trip: {trip.title} was not found'}