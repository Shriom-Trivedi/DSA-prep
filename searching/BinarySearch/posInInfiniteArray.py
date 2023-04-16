# arr = [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 20, 23, 30]
# target = 15

class FindInInfiniteArray():
    def __init__(self) -> None:
        pass

    def search(self, arr, target, start, end):
        while(start <= end):
            mid = (start + end)//2
            if(arr[mid] == target): return mid
            elif(arr[mid] < target) : start = mid + 1
            else: end = end - 1

        return -1

    def findingRange(self, arr, target):
        # Applies binary search
        # first find the range
        # first start with box of size 2
        start = 0
        end = 1

        # condition for the target to lie in the range
        # check till target is greated than end
        while(target > arr[end]):
            newStart = end + 1
            # newEnd = prev end + sizeOfBox + 2
            newEnd = end + (end - start + 1) * 2
            start = newStart
            end = newEnd
        
        return self.search(arr, target, start, end);

arr = [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 20, 23, 30]
target = 10
searchObj = FindInInfiniteArray()
res = searchObj.findingRange(arr, target)
print(f"element {arr[res]} found at index: {res}")