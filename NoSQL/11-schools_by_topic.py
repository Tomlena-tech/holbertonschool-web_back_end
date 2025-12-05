#!/usr/bin/env python3
""" Function that returns all schools having a specific topic """
def schools_by_topic(mongo_collection, topic):
    """returns all schools having a specific topic
    Args:
        mongo_collection: pymongo collection object
        topic: topic searched
    Returns: list of school documents
    """
    if mongo_collection is None:
        return []
    if not isinstance(topic, str):
        return []
    return list(mongo_collection.find({'topics': topic}))
    
