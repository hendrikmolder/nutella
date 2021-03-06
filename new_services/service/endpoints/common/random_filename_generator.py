# Original: Hapsoro
# Modified by Hendrik Molder 2019
import random, string

### generate randomized file name
### filename will ge generated by combining uppercase, lowercase, and numeric characters
### N = length of filename
def generate(N = 36):
    ## http://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python/23728630#23728630
    ## with modification
    result = ''.join(
            random.SystemRandom().choice(string.ascii_uppercase + string.ascii_lowercase + string.digits)
            for i in range(1,N) ### repeat N times
            )
    return result
