from werkzeug.security import generate_password_hash
from app.models import db, User, Trip, Journal_entry, Photo

def seed_users():

    users = [
        User(username='simon', email='theduke@gmail.com', hashedpassword='password', hometown='New York City', gps_permission=True, profile_pic='https://www.gannett-cdn.com/presto/2020/12/25/USAT/6ae9e013-9f3f-4a9a-bc90-c21f3fa9968d-BRIDGERTON_101_Unit_00193R.jpg', about_me="I'm a rake who loves adventure." ),
        User(username='daphne', email='diamondoftheseason@gmail.com', hashedpassword='password', hometown='San Francisco', gps_permission=True, profile_pic='https://pyxis.nymag.com/v1/imgs/952/aa8/1d3eb6f6f01e89823147e94cb7663d5605-bridgerton-review.2x.rsocial.w600.jpg', about_me="Prince Charming wasn't charming enough" )
    ]

    for user in users:
        db.session.add(user)

    db.session.commit()

def seed_trips():

    trips = [
        Trip(name='Yellowstone and Back Again', user_id=FK,  start_date='2020-08-09', end_date=null, start_lat='40.712776', start_lon='-74.005974', end_lat='45.045200', end_lon='-110.521767', private=False),
        Trip(name='Grand Canyon Birthda', user_id=FK,  start_date=' 2020-09-27', end_date=null, start_lat='37.769893', start_lon='-122.421123', end_lat='36.106964', end_lon='-112.112999', private=False),
        Trip(name='Haunted Route 66', user_id=FK,  start_date='2020-04-14', end_date=null, start_lat='40.712776', start_lon='-74.005974', end_lat='35.0820877', end_lon='-106.9566669', private=True)
    ]

    for trip in trips:
        db.session.add(trip)
    db.session.commit()

def seed_journal_entries():

    entries = [
        Journal_entry(title="Rainbow's Ending", trip_id=FK, entry="80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.", private=True),
        Journal_entry(title='Down the Road', trip_id=FK, entry="There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.", private=False),
        Journal_entry(title='A Bear in the Woods', trip_id=FK, entry="Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so — if you want to sing this way, think of what you’d like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free.", private=False),
        Journal_entry(title='Shadowy Flight', trip_id=FK, entry="Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.", private=False),
        Journal_entry(title='Radio Telescope Detour', trip_id=FK, entry="Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might. Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all.", private=False),
        Journal_entry(title='New Dreams & Better Scenes', trip_id=FK, entry="Hey there where ya goin’, not exactly knowin’, who says you have to call just one place home. He’s goin’ everywhere, B.J. McKay and his best friend Bear. He just keeps on movin’, ladies keep improvin’, every day is better than the last. New dreams and better scenes, and best of all I don’t pay property tax. Rollin’ down to Dallas, who’s providin’ my palace, off to New Orleans or who knows where. Places new and ladies, too, I’m B.J. McKay and this is my best friend Bear.", private=True),
    ]

    for entry in entries:
        db.session.add(entry)
    db.session.commit()

def seed_photos():

    photos = [
        Photo(journal_entry_id=FK, photos_url='../../public/images/rainbow.jpg'),
        Photo(journal_entry_id=FK, photos_url='../../public/images/road.jpg'),
        Photo(journal_entry_id=FK, photos_url='../../public/images/bear.jpg'),
        Photo(journal_entry_id=FK, photos_url='../../public/images/shadow.jpg'),
        Photo(journal_entry_id=FK, photos_url='../../public/images/telescope.jpg'),
        Photo(journal_entry_id=FK, photos_url='../../public/images/dream.jpg'),
    ]

    for photo in photos:
        db.session.add(photo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()

def undo_trips():
    db.session.execute('TRUNCATE trips;')
    db.session.commit()

def undo_journal_entries():
    db.session.execute('TRUNCATE journal_entries;')
    db.session.commit()

def undo_photos():
    db.session.execute('TRUNCATE photos;')
    db.session.commit()

