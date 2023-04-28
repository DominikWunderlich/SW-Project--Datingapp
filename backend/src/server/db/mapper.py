import mysql.connector as connector
import os
from contextlib import AbstractContextManager
from abc import ABC, abstractmethod


class mapper(AbstractContextManager, ABC):

    def __init__(self):
        self._connection = None

    """Was soll geschehen wenn wir mit der Mapper anfangen zu arbeiten"""

    def __enter__(self):

        if os.getenv('GAE_ENV', '').startswith('standard'):

            self._connection = connector.connect(user='demo', password='demo', unix_socket='', database='datingapp')

        else:
            self._connection = connector.connect(user='demo', password='demo', host='', database='datingapp')

        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self._connection.close()

    @abstractmethod
    def find_all(self):
        pass

    @abstractmethod
    def find_by_key(self, key):
        pass

    @abstractmethod
    def insert(self, object):
        pass

    @abstractmethod
    def update(self, object):
        pass

    @abstractmethod
    def delete(self, object):
        pass


