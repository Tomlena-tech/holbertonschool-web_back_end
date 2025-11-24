#!/usr/bin/env python3
"""
This module executes multiple coroutines concurrently and returns results
in ascending order without using sort().
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    """
    Execute wait_random n times concurrently with specified max_delay.
    
    This function spawns n instances of wait_random coroutine and collects
    their results in ascending order without using the sort() method.
    
    Args:
        n: Number of times to spawn wait_random
        max_delay: Maximum delay value for each wait_random call
    
    Returns:
        List of delay values (floats) in ascending order
    """
    results: list = []
    tasks: list = []
    
    for i in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        tasks.append(task)
    
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        inserted = False
        for index in range(len(results)):
            if delay < results[index]:
                results.insert(index, delay)
                inserted = True
                break
        if not inserted:
            results.append(delay)
    
    return results
