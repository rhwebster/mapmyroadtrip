from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  hometown = db.Column(db.String, nullable=True)
  gps_permission = db.Column(db.BOOLEAN, nullable=True)
  profile_pic = db.Column(db.String, nullable=True)
  about_me = db.Column(db.TEXT, nullable=True)

  trips = db.relationship("Trip", back_populates='user')
  journal_entries = db.relationship("JournalEntry", back_populates='user')
  photos = db.relationship("Photo", back_populates='user')

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "profile_pic": self.profile_pic,
      "about_me": self.about_me,
    }
