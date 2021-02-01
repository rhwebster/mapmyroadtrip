from .db import db


class Trip(db.Model):
    __tablename__ = "trips"

    id = db.Column(db.INTEGER, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.VARCHAR, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=True)
    start_lat = db.Column(db.FLOAT, nullable=False)
    start_lon = db.Column(db.FLOAT, nullable=False)
    end_lat = db.Column(db.FLOAT, nullable=False)
    end_lon = db.Column(db.FLOAT, nullable=False)
    route = db.Column(db.VARCHAR, nullable=True)
    private = db.Column(db.BOOLEAN, default=True)

    user = db.relationship("User", back_populates="trips")
    journal_entries = db.relationship("JournalEntry", back_populates="trip")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'start_lat': self.start_lat,
            'start_lon': self.start_lon,
            'end_lat': self.end_lat,
            'end_lon': self.end_lon,
            'route': self.route,
            'private': self.private
            }
