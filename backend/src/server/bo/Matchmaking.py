""" In diesem Dokument wird das Matchmkaing realisiert"""

"""Das Matchmaking vergleicht ein Suchprofil mit dem Profil eines anderen Nutzers und gibt einen 
Prozentwert zurück, der angibt, wie gut diese zusammenpassen. Dies wird für sämtliche Profile durchgefüht.
Der Prozentuale wert je Profil wird zurückgegeben und den Nutzer angezeigt."""

class Matchmaking:
    def __init__(self, searchprofile, userprofile):
        self.searchprofile = searchprofile
        self.userprofile = userprofile

#Es müssen die InfoObjekte und die Markmale von Suchprofil und Uerprofil geholt werden.
    def get_infoobjects_searchprofile(self):
        return #infoobjects_searchprofile

    def get_infoobjects_userprofile(self):
        return #infoobjects_userprofiles

    def get_measures_searchprofile(self):
        return #measures_searchprfile

    def get_measures_userprfile(self):
        return #measures_userprofile

    def calc_percentage(self):
        total_infoobjects = len(self)
        total_count = 0

    #In der For-Schleife wird zuerst geprüft, ob das infoobjekt in beiden profilen vorhanden ist.
    #Anschließend wird gprüft, ob die infoobjekte übereinstimmen
        for infoobject in self.searchprofile:
            if infoobject in self.userprofile and self.searchprofile[infoobject] == self.userprofile[infoobject]:
                total_count += 1

        total_percentage = (total_count / total_infoobjects) * 100
        return total_percentage

    def matchmaking(self):
        match_score = self.calc_percentage()
        return match_score

