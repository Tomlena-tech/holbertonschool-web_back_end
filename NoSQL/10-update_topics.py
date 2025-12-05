#!/usr/bin/env python3
""" Function that change all topics of a school doc """

from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    if mongo_collection is None:
        return
    if not isinstance(name, str) or not isinstance(topics, list):
        return
    mongo_collection.update_many(
        {'name': name},
        {'$set': {'topics': topics}}
    )
