from .db import db


class Photo(db.Model):
    __table_name__ = "photos"

    id = db.Column(db.Integer, primary_key=True)
    trip_id = db.Column(db.INTEGER, db.ForeignKey("trip.id"), nullable=False)
    photos_url = db.Column(db.VARCHAR, nullable=False)

    journal_entry = db.relationship("JournalEntry", back_populates='photos')