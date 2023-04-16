class Reverse():
    def __init__(self) -> None:
        pass

    def rev_a_num(self, n):
        if(n%10 == n):
            return n
        
        first = n%10
        later = self.rev_a_num(n//10)
        return str(first) + str(later)
    
some = Reverse()
out = some.rev_a_num(130042)
print(out)