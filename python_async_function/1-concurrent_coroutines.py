#!/usr/bin/env python3
""" Execute multiple coroutines at the same time """

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list:
    """Execute wait_random n times concurrently and return sorted delays."""
    results: list = []
    tasks = []
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
