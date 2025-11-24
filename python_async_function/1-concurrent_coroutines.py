#!/usr/bin/env python3
""" Execute multiple coroutines un the same time """


wait_random = __import__('0-basic_async_syntax').wait_random
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n, max_delay):
    n = 5,
    max_delay = 5,
    return va

