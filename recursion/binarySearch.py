# This is binary search with recursion.

class BinSearch():
    def __init__(self) -> None:
        pass

    def search(self, arr, target, start, end):
        # start, end, mid
        if(start > end):
            return -1
        
        mid = start + (end - start) // 2
        
        if(target == arr[mid]):
            return mid
        
        elif (target < arr[mid]):
            new_end = mid - 1
            return self.search(arr, target, start, new_end)

        else:
            new_start = mid + 1
            return self.search(arr, target, new_start, end)
        
arr = [2, 4, 5, 10, 8, 49, 22, 56, 66, 78]
target = 6700

some = BinSearch()
out = some.search(arr, target, start = 0, end = len(arr) - 1)
print(out)

        