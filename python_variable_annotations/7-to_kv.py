#!/usr/bin/env python3
"""Complex types - string and int/float to tuple"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Crée un tuple avec une clé et le carré d'une valeur
    
    Args:
        k: chaîne de caractères (clé)
        v: entier ou float (valeur)
    
    Returns:
        Tuple avec k et v au carré
    """
    return (k, v ** 2)
