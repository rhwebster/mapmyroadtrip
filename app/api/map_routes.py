from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, JournalEntry, Trip

map_routes = Blueprint('map', __name__)


@map_routes.route('/<int:id>')
# @login_required
def getJournalPoints(id):
    entries = JournalEntry.query.join(Trip).join(User).filter(User.id == id).all()
    print('ENTRIES------>', entries)
    entry_list = [entry.get_coordinates() for entry in entries]
    print('USERS BACKEND STUFF------->', entry_list)
    return {'coordinates': entry_list}

# def getTripPoints(id):
#     entries = Trip.query.join(User).join(User).filter(User.id == id).all()

#     entry_list = [entry.get_coordinates() for entry in entries]
#     print('USERS BACKEND STUFF------->', entry_list)
#     return {'coordinates': entry_list}

# @map_routes.route('/')
# @login_required
# def getTripPoints():
#     users = User.query.filter(User.id == 'simon').first()
#     return {"users": [user.to_dict() for user in users]}
# @map_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()
