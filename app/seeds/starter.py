from werkzeug.security import generate_password_hash
from app.models import db, User, Trip, JournalEntry, Photo


def seed_users():

    simon = User(username='simon', email='theduke@gmail.com', password='password', hometown='New York City', gps_permission=True, profile_pic='https://www.gannett-cdn.com/presto/2020/12/25/USAT/6ae9e013-9f3f-4a9a-bc90-c21f3fa9968d-BRIDGERTON_101_Unit_00193R.jpg', about_me="I'm a rake who loves adventure." )
    daphne = User(username='daphne', email='diamondoftheseason@gmail.com', password='password', hometown='San Francisco', gps_permission=True, profile_pic='https://pyxis.nymag.com/v1/imgs/952/aa8/1d3eb6f6f01e89823147e94cb7663d5605-bridgerton-review.2x.rsocial.w600.jpg', about_me="Prince Charming wasn't charming enough")


    db.session.add(simon)
    db.session.add(daphne)
    db.session.commit()



def seed_trips():

    simon = User.query.filter(User.username == 'simon').first()
    daphne = User.query.filter(User.username == 'daphne').first()

    yellowstone = Trip(title='Yellowstone and Back Again', user=simon,  start_date='2020-08-09', end_date=None, start_lat=40.712776, start_lon=-74.005974, end_lat=45.045200, end_lon=-110.521767, private=False)
    grand_canyon = Trip(title='Grand Canyon Birthday', user=daphne, start_date=' 2020-09-27', end_date=None, start_lat=37.769893, start_lon=-122.421123, end_lat=36.106964, end_lon=-112.112999, private=False)
    route66 = Trip(title='Haunted Route 66', user=simon, start_date='2020-04-14', end_date=None, start_lat=40.712776, start_lon=-74.005974, end_lat=35.0820877, end_lon=-106.9566669, private=True)




    db.session.add(yellowstone)
    db.session.add(grand_canyon)
    db.session.add(route66)
    db.session.commit()


def seed_journal_entries():

    yellowstone = Trip.query.filter(Trip.title == 'Yellowstone and Back Again').first()
    grand_canyon = Trip.query.filter(Trip.title == 'Grand Canyon Birthday').first()
    route66 = Trip.query.filter(Trip.title == 'Haunted Route 66').first()
    simon = User.query.filter(User.username == 'simon').first()
    daphne = User.query.filter(User.username == 'daphne').first()

    rainbow = JournalEntry(title="Rainbow's Ending", user=simon, trip=yellowstone, entry="80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.", lat=44.5551034, lon=-110.3979364)
    road = JournalEntry(title='Down the Road', user=simon, trip=route66, entry="There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.", lat=35.1872366, lon=-101.9892373)
    bear = JournalEntry(title='A Bear in the Woods', user=simon, trip=yellowstone, entry="Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so — if you want to sing this way, think of what you’d like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free.", lat=44.5551046, lon=-110.389364)
    flight = JournalEntry(title='Shadowy Flight', user=simon, trip=route66, entry="Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.", lat=35.0619463254142, lon=-106.75723965626862)
    telescope = JournalEntry(title='Radio Telescope Detour', user=daphne, trip=grand_canyon, entry="Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might. Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all.", lat=34.0727173, lon=-107.8232042)
    dreams = JournalEntry(title='New Dreams & Better Scenes', user=daphne, trip=grand_canyon, entry="Hey there where ya goin’, not exactly knowin’, who says you have to call just one place home. He’s goin’ everywhere, B.J. McKay and his best friend Bear. He just keeps on movin’, ladies keep improvin’, every day is better than the last. New dreams and better scenes, and best of all I don’t pay property tax. Rollin’ down to Dallas, who’s providin’ my palace, off to New Orleans or who knows where. Places new and ladies, too, I’m B.J. McKay and this is my best friend Bear.", lat=38.4902857001479, lon=-105.33556666613165)


    db.session.add(rainbow)
    db.session.add(road)
    db.session.add(bear)
    db.session.add(flight)
    db.session.add(telescope)
    db.session.add(dreams)
    db.session.commit()

def seed_photos():

    rainbow = JournalEntry.query.filter(JournalEntry.title == "Rainbow's Ending").first()
    road = JournalEntry.query.filter(JournalEntry.title == 'Down the Road').first()
    bear = JournalEntry.query.filter(JournalEntry.title == 'A Bear in the Woods').first()
    flight = JournalEntry.query.filter(JournalEntry.title == 'Shadowy Flight').first()
    telescope = JournalEntry.query.filter(JournalEntry.title == 'Radio Telescope Detour').first()
    dreams = JournalEntry.query.filter(JournalEntry.title == 'New Dreams & Better Scenes').first()
    simon = User.query.filter(User.username == 'simon').first()
    daphne = User.query.filter(User.username == 'daphne').first()

    rainbow = Photo(journal_entry=rainbow, user=simon, photos_url='rainbow.jpg')
    road = Photo(journal_entry=road, user=simon, photos_url='road.jpg')
    bear = Photo(journal_entry=bear, user=simon, photos_url='bear.jpg')
    flight = Photo(journal_entry=flight, user=simon, photos_url='shadow.jpg')
    telescope = Photo(journal_entry=telescope, user=daphne, photos_url='telescope.jpg')
    dreams = Photo(journal_entry=dreams, user=daphne, photos_url='dream.jpg')


    db.session.add(rainbow)
    db.session.add(road)
    db.session.add(bear)
    db.session.add(flight)
    db.session.add(telescope)
    db.session.add(dreams)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()

def undo_trips():
    db.session.execute('TRUNCATE trips CASCADE;')
    db.session.commit()

def undo_journal_entries():
    db.session.execute('TRUNCATE journal_entries CASCADE;')
    db.session.commit()

def undo_photos():
    db.session.execute('TRUNCATE photos;')
    db.session.commit()
