#!/usr/bin/env python3

""" Create a function 'get_page' to do a simple pagination """

import csv
import math
from typing import List

index_range = __import__('0-simple_helper_function').index_range

def get_page(page: int, page_size: int)-> List[List]:
    assert isinstance(page, int) and page > 0
    assert isinstance(page_size, int) and page_size > 0
    start, end = index_range(page, page_size)
    
    dataset = []
    with open("Popular_Baby_Names.csv") as f:
        reader = csv.reader(f)
        dataset = list(reader)
        
    return dataset [start : end]
    
  