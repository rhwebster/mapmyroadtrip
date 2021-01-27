from .db import db


class JournalEntry(db.Model):
    __tablename__ = "journal_entries"

    id = db.Column(db.INTEGER, primary_key=True)
    title = db.Column(db.VARCHAR, nullable=False)
    trip_id = db.Column(db.INTEGER, db.ForeignKey("trips.id"), nullable=False)
    image = db.Column(db.VARCHAR, nullable=True)
    entry = db.Column(db.TEXT, nullable=False)
    lat = db.Column(db.FLOAT, nullable=False)
    lon = db.Column(db.FLOAT, nullable=False)

    trip = db.relationship("Trip", back_populates="journal_entries")
    photos = db.relationship("Photo", back_populates="journal_entry")

    def get_coordinates(self):
        return {'lat':self.lat, 'lon': self.lon}
