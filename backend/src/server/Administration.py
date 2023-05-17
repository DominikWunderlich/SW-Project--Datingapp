from server.bo.Message import Message
from server.db.MessageMapper import MessageMapper
from blockNote import blockNote
from server.db.blockNoteMapper import BlockNoteMapper
from favoriteNote import favoriteNote
from server.db.FavoriteNoteMapper import FavoriteNoteMapper
from Account import Account
from server.db.AccountMapper import AccountMapper


class Administration(object):
    def __init__(self):
        pass

    """Spezifische Methoden für message"""

    def create_mssage(self, sender, recipient, content):
        """Objekt der Klasse Massage wird erstellt"""
        m = Message()
        m.set_id(1)
        m.set_sender(sender)
        m.set_recipient(recipient)
        m.set_content(content)

        """Objekt wird mit insert-methode in DB eingebunden"""
        with MessageMapper() as mapper:
            return mapper.insert(m)

    def save_message(self, msg):
        with MessageMapper() as mapper:
            mapper.update(msg)

    def delete_message(self, message):
        """Hier wird "message" mit mapper aus DB gelöscht"""
        with MessageMapper() as mapper:
            mapper.delete(message)

    def get_all_messages(self):
        """Alle messages auslesen"""
        with MessageMapper() as mapper:
            return mapper.find_all()

    def get_message_by_sender_id(self, senderid):
        """messages anhand sender auslesen"""
        with MessageMapper() as mapper:
            return mapper.find_by_sender_id(senderid)

    def get_message_by_recipient_id(self, recipientid):
        """messages anhand recipient auslesen"""
        with MessageMapper() as mapper:
            return mapper.find_by_recipient(recipientid)

    def get_message_by_id(self, key):
        with MessageMapper() as mapper:
            return mapper.find_by_key(key)

    """Spezifische Methoden für blockNote"""

    def create_blocknote(self, profile_id):
        blocklist = blockNote()
        blocklist.add_user(profile_id)
        blocklist.set_id(1)

        with BlockNoteMapper() as mapper:
            return mapper.insert(blocklist)

    def save_blocklist(self, blocklist):
        with BlockNoteMapper as mapper:
            mapper.update(blocklist)

    def delete_blocklist(self, blocklist):
        with BlockNoteMapper as mapper:
            mapper.delete(blocklist)

    def get_all_blocklists(self):
        with BlockNoteMapper() as mapper:
            return mapper.find_all()

    def get_blocklist_by_id(self, key):
        with BlockNoteMapper() as mapper:
            return mapper.find_by_key(key)

    def get_blocklist_by_user(self, user_id):
        with BlockNoteMapper() as mapper:
            return mapper.find_by_user(user_id)


    """Spezifische Methoden für blockNote"""

    def create_favoritenote(self, profile_id):
        favoritenote = favoriteNote()
        favoritenote.add_user(profile_id)
        favoritenote.set_id(1)

        with FavoriteNoteMapper as mapper:
            mapper.insert(favoritenote)

    def save_favoritenote(self, favoritenote):
        with FavoriteNoteMapper() as mapper:
            mapper.update(favoritenote)

    def delete_favoritenote(self, favoritenote):
        with FavoriteNoteMapper() as mapper:
            mapper.delete(favoritenote)

    def get_all_favoritenotes(self):
        with FavoriteNoteMapper() as mapper:
            return mapper.find_all()

    def get_favoritenote_by_id(self, key):
        with FavoriteNoteMapper() as mapper:
            return mapper.find_by_key(key)

    def get_favoritenote_by_user(self, user_id):
        with FavoriteNoteMapper() as mapper:
            return mapper.find_by_user(user_id)


    """Spezifische Methoden für Account"""

    def create_account(self, account):
        with AccountMapper() as mapper:
            return mapper.insert(account)

    def save_account(self, account):
        with AccountMapper() as mapper:
            return mapper.update(account)

    def delete_account(self, account):
        with AccountMapper() as mapper:
            return mapper.delete(account)

    def get_all_accounts(self):
        with AccountMapper() as mapper:
            return mapper.find_all()

    def get_account_by_id(self, key):
        with AccountMapper() as mapper:
            return mapper.find_by_key(key)

    def get_account_by_google_id(self, google_id):
        with AccountMapper() as mapper:
            return mapper.find_by_google_id(google_id)

