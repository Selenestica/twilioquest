import sys

num = 1
array = sys.argv
array.pop(0)
for name in array:
    print(f"{num}. " + name)
    num += 1
