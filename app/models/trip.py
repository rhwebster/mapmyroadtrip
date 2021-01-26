from .db import db


class Trip(db.Model):
    __table_name__ = "trips"

    id = db.Column(db.INTEGER, primary_key=True)
    name = db.Column(db.VARCHAR, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.VARCHAR, nullable=False)
    start_date = db.Column(db.DATETIME, nullable=False)
    end_date = db.Column(db.DATETIME, nullable=True)
    start_lat = db.Column(db.FLOAT, nullable=False)
    start_lon = db.Column(db.FLOAT, nullable=False)
    end_lat = db.Column(db.FLOAT, nullable=False)
    end_lon = db.Column(db.FLOAT, nullable=False)
    route = db.Column(db.VARCHAR, nullable=False)
    private = db.Column(db.BOOLEAN, default=True)

    user = db.relationship("User", back_populates="trips")
    journal_entries = db.relationship("Journal_Entry", back_populates="trip")