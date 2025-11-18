#!/usr/bin/env python3
"""Complex types - mixed list"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Calcule la somme d'une liste mixte d'entiers et de floats
    
    Args:
        mxd_lst: liste contenant des int et des float
    
    Returns:
        La somme de tous les éléments en tant que float
    """
    return sum(mxd_lst)
