from flask.cli import AppGroup
from .starter import seed_users, undo_users, seed_trips, undo_trips, seed_journal_entries, undo_journal_entries, seed_photos, undo_photos

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_trips()
    seed_journal_entries()
    seed_photos()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_trips()
    undo_journal_entries()
    undo_photos()