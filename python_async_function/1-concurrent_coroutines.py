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
    delays = await asyncio.gather(
        *[wait_random(max_delay) for _ in range(n)]
    )

    result: list[float] = []
    for delay in delays:
        i = 0
        while i < len(result) and result[i] < delay:
            i += 1
        result.insert(i, delay)

    return result
