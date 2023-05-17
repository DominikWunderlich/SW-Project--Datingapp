from relationship import relationship
from BusinessObject import BusinessObject as bo


class blockNote(bo, relationship):
    def __init__(self):
        super().__init__()
        """Erstellen einer Liste um dort Profile zu speichern"""
        self.block_list = []

    def add_user(self, blocked_user):
        """if abfrage, um doppelte Nutzer in Liste zu vermeiden"""
        if blocked_user not in self.block_list:
            self.block_list.append(blocked_user)

    def del_user(self, profile_id):
        """Nutzer kann nur gelöscht werden, wenn Nutzer auch in Liste vorhanden ist"""
        if profile_id in self.block_list:
            self.block_list.remove(profile_id)

    def get_all_users(self):
        return self.block_list



