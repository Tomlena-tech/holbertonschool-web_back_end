#!/usr/bin/env python3

"""Create a function 'index_range'"""

def index_range(page, page_size):
    """
    Return a tuple of size two containing a start index and an end index
    

    Args:
        page (int): The page number (1-indexed)
        page_size (int): The number of items per page

    Returns:
        tuple: A tuple 
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
