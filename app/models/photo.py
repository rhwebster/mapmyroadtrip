from .db import db


class Photo(db.Model):
    __tablename__ = "photos"

    id = db.Column(db.Integer, primary_key=True)
    entry_id = db.Column(db.INTEGER, db.ForeignKey("journal_entries.id"), nullable=False)
    photos_url = db.Column(db.VARCHAR, nullable=False)

    journal_entry = db.relationship("JournalEntry", back_populates='photos')