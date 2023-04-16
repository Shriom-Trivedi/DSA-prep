class Count():
    def __init__(self) -> None:
        pass

    def zeroes(self, n, count):
        # n = 10202
        if(n == 0):
            return count
        
        if (n%10 == 0):
            return self.zeroes(n//10, count + 1)
       
        return self.zeroes(n//10, count)
        
some = Count()
out = some.zeroes(10202, 0)
print(out)