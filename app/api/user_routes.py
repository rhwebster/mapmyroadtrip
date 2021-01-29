from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from app.helpers import *
from werkzeug.utils import secure_filename


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/dash/<int:id>', methods=['PATCH'])
@login_required
def new_pic(id):

    user = User.query.get(id)

    data = request.get_json(force=True)
    print('ROUTE DATA------>', data)

    user.profile_pic = data['profPic']

    db.session.commit()
    return {'added_profile_pic': str(data['profPic'])}



def render_picture(data):

    render_pic = base64.b64encode(data).decode('ascii')
    return render_pic
