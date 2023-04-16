class BasicQues():
    def __init__(self) -> None:
        pass

    def print_n_to_1(self, n) -> int:
        if n == 0:
            return
        
        print(n)
        return self.print_n_to_1(n-1)
    
    def print_1_to_n(self,n):
        if n == 0:
            return
        
        self.print_1_to_n(n-1)
        return print(n)
    
    # Factorial of a number
    def prod_n_to_1(self, n):
        if n <= 1:
            return 1
        
        return n * self.prod_n_to_1(n - 1)
    
    # Sum n to 1
    def sum_n_to_1(self, n):
        if n <= 1:
            return 1
        
        return n * self.prod_n_to_1(n - 1)

    def sum_of_digits(self, n):
        if n == 0:
            return 0

        return self.sum_of_digits(n//10) + (n%10)
    
some = BasicQues()

# out = some.print_n_to_1(5)
# print(out)

# out_2 = some.print_1_to_n(18)
# print(out_2)

# out_3 = some.prod_n_to_1(10)
# print(out_3)

sum_of_digits = some.sum_of_digits(1342)
print(sum_of_digits)