#!/usr/bin/env python3
""" Generate a comprehension list asynchrone with 10 times
    Returns:
        _type_: return 10 lists
    """

from typing import List

async_generator = __import__('async_generator').async_generator


async def async_comprehension() -> List[float]:
    return [i async for i in async_generator()]
