#!/usr/bin/env python3
"""
Measure the runtime of four parallel async_comprehension calls
"""
import time
import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    """Measure the total runtime of executing async_comprehension 4 times
    Returns:
          float: Total runtime in seconds
    """

    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )
    end_time = time.time()
    return end_time - start_time
