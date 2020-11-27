# -*- coding: utf-8 -*-
"""
Created on Wed Nov 25 21:27:26 2020

@author: Surya
"""


import csv
import pandas as pd
import random
New=[]
with open('movieR.csv','r') as csvfile:
    readCSV = csv.reader(csvfile)
    New.append(random.choice(list(readCSV)))
print(New[0][0])
        
        