# RECURSION!
# It is basically a function calling itself.
# It helps us in solving big complex problems in a simpler way.
# You can convert recursion into iteration and vice-versa.


class Numbers():
    def __init__(self) -> None:
        pass

    def printNumbers(self, n):
        if(n == 6):
            return
        print(n)
        return self.printNumbers(n+1)

some = Numbers()
res = some.printNumbers(1)
print(res)