class Count():
    def __init__(self) -> None:
        pass

    def reduce_to_zero(self, n, count):
        if (n == 0):
            return count
        
        elif(n%2 == 0):
            return self.reduce_to_zero(n//2, count + 1)
        else:
            return self.reduce_to_zero(n - 1, count + 1)
        
some = Count()
out = some.reduce_to_zero(n = 8, count = 0)
print(out)
