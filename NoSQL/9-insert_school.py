#!/usr/bin/env python3
""" Insert a new document into a collection Kwargs"""


def insert_school(mongo_collection, **kwargs):
        return mongo_collection.insert_one(kwargs).inserted_id
