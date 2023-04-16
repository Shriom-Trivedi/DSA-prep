class Array_sorted():
    def __init__(self) -> None:
        pass

    def sorted(self, arr, idx) -> bool:
        if idx == len(arr) - 1:
            return True
        
        return arr[idx] < arr[idx + 1] and self.sorted(arr, idx + 1)
    
arr = [1, 2, 3, 4, 6, 5, 4]
idx = 0
some = Array_sorted()
out = some.sorted(arr, idx)
print(out)