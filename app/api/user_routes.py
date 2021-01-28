from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
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


@user_routes.route('/dash', methods=['POST'])
@login_required
def new_pic():

    data = request.json

    if "image" not in request.files:
        print("No image key in request.files")
        return {'errors': 'no user file'}, 401

    file = request.files["image"]

    if file.filename == "":
        print("Please select a file")
        return {'errors': 'no filename'}, 401

    # if file and allowed_file(file.filename):
    file.filename = secure_filename(file.filename)
    profile_pic = upload_file_to_s3(file)
    # Add and commit to database
    picture = User(
        profile_pic=data['profile_pic']
    )
    db.session.add(picture)
    db.session.commit()
    return {'output': str(profile_pic)}



def render_picture(data):

    render_pic = base64.b64encode(data).decode('ascii')
    return render_pic
