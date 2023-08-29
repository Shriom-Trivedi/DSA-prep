class Search():
    def __init__(self) -> None:
        pass

    def linear_search(self, arr, target, idx):
        # base condition
        if idx == len(arr):
            return -1
        
        if arr[idx] == target:
            print({idx: idx, ele: arr[idx]})
            return idx
        else:
            return self.linear_search(arr, idx + 1, target)
        
arr = [1, 4, 3, 2, 8, 9]
target = 2
some = Search()
out = some.linear_search(arr, target, 0)
print(out)