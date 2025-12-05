#!/usr/bin/env python3

""" Insert a new document into a collection Kwargs"""

from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in a collection using kwargs
    and return the new document's _id"""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
