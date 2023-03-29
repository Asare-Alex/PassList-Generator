import itertools
import string

all_chars = string.ascii_letters + string.digits + string.punctuation
min_length = 3
max_length = 25

for length in range(min_length, max_length + 1):
    for combination in itertools.product(all_chars, repeat=length):
        print(''.join(combination))
