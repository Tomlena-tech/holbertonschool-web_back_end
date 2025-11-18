#!/usr/bin/env python3
"""Complex types - functions"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Crée une fonction qui multiplie par un nombre donné
    
    Args:
        multiplier: nombre par lequel multiplier
    
    Returns:
        Fonction qui multiplie un float par multiplier
    """
    def multiply(n: float) -> float:
        """Multiplie n par multiplier"""
        return n * multiplier
    
    return multiply
