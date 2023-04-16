class Fibnonacci():
    def __init__(self) -> None:
        pass

    def fibo(self, n):
        # base condition
        if(n<2):
            return n
        return self.fibo(n-2) + self.fibo(n-1)
    
some = Fibnonacci()
output = some.fibo(6)
print(output)