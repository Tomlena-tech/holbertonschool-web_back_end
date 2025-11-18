#!/usr/bin/env python3
"""Let's duck type an iterable object"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Retourne une liste de tuples avec chaque élément et sa longueur
    
    Args:
        lst: itérable contenant des séquences
    
    Returns:
        Liste de tuples (élément, longueur)
    """
    return [(i, len(i)) for i in lst]
