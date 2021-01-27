from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

map_routes = Blueprint('map', __name__)


@map_routes.route('/')
@login_required
def getAllLatLon():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


# @map_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()
