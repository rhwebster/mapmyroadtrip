from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

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


def render_picture(data):

    render_pic = base64.b64encode(data).decode('ascii')
    return render_pic


# @app.route('/upload', methods=['POST'])
# def upload():

#    file = request.files['inputFile']
#    data = file.read()
#    render_file = render_picture(data)
#    text = request.form['text']
#    location = request.form['location']

#    newFile = FileContent(name=file.filename, data=data,
#                          rendered_data=render_file, text=text, location=location)
#    db.session.add(newFile)
#    db.session.commit()
#    flash(f'Pic {newFile.name} uploaded Text: {newFile.text} Location:
#          {newFile.location}')

#    return render_template('upload.html')

