class Sum():
    def __init__(self) -> None:
        pass

    def sum_of_digits(self, n):
        if n == 0:
            return 0

        return self.sum_of_digits(n//10) + (n%10)
    
some = Sum()

sum_of_digits = some.sum_of_digits(1342)
print(sum_of_digits)