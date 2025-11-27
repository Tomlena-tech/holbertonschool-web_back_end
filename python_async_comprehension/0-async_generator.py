#!/usr/bin/env python3
""" Write an asynchrone """

import asyncio
import random

async def async_generator():
    """ Coroutine who's loop 10 times"""
    
    for i in range(0, 10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
