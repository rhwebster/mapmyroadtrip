INSERT INTO users (username, email, hashedpassword, home_town, gps_permission, profile_pic, about_me) VALUES
    (1,'simon', 'theduke@gmail.com', 'password', 'New York City', True, 'https://www.gannett-cdn.com/presto/2020/12/25/USAT/6ae9e013-9f3f-4a9a-bc90-c21f3fa9968d-BRIDGERTON_101_Unit_00193R.jpg', 'I/'m a rake who loves adventure.'),
    (2,'daphne', 'diamondoftheseason@gmail.com', 'password', 'San Francisco', True, 'https://pyxis.nymag.com/v1/imgs/952/aa8/1d3eb6f6f01e89823147e94cb7663d5605-bridgerton-review.2x.rsocial.w600.jpg', 'Prince Charming wasn/'t charming enough'),

INSERT INTO trips (name, userId, start_date, end_date, start_lat, start_lon, end_lat, end_lon, private) VALUES
    (3,'Yellowstone and Back Again', 1, 2020-08-09, null, '40.712776', '-74.005974', '45.045200', '-110.521767', False),
    (4,'Grand Canyon Birthday', 2, 2020-09-27, null, '37.769893', '-122.421123', '36.106964', '-112.112999', False),
    (5,'Haunted Route 66' , 1, 2020-04-14, null, '40.712776', '-74.005974', True);

INSERT INTO journal_entry (title, tripId, entry, private) VALUES
    (6,'Rainbow's Ending', 3, '80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world. ', False),
    (7,'Down the Road', 5, 'There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on. ', False),
    (8,'A Bear in the Woods', 3, 'Barnaby The Bear’s my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear’s my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so — if you want to sing this way, think of what you’d like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free. ', False),
    (9,'Shadowy Flight', 5, 'Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law. ', False),
    (10,'Radio Telescope Detour', 4, 'Ulysses, Ulysses — Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses — Fighting evil and tyranny, with all his power, and with all of his might. Ulysses — no-one else can do the things you do. Ulysses — like a bolt of thunder from the blue. Ulysses — always fighting all the evil forces bringing peace and justice to all.', False),
    (11,'New Dreams & Better Scenes', 4, 'Hey there where ya goin’, not exactly knowin’, who says you have to call just one place home. He’s goin’ everywhere, B.J. McKay and his best friend Bear. He just keeps on movin’, ladies keep improvin’, every day is better than the last. New dreams and better scenes, and best of all I don’t pay property tax. Rollin’ down to Dallas, who’s providin’ my palace, off to New Orleans or who knows where. Places new and ladies, too, I’m B.J. McKay and this is my best friend Bear.
', False);

INSERT INTO photos (journal_entry_id, photos_url) VALUES
    (6, 'images/rainbow.jpg'),
    (7, 'images/road.jpg'),
    (8, 'images/bear.jpg'),
    (9, 'images/shadow.jpg'),
    (10, 'images/telescope.jpg'),
    (11, 'images/dream.jpg');