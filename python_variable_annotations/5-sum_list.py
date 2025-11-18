#!/usr/bin/env python3
"""Complex types - list of floats"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Calcule la somme d'une liste de nombres flottants
    
    Args:
        input_list: liste de nombres flottants
    
    Returns:
        La somme de tous les éléments de la liste
    """
    return sum(input_list)
