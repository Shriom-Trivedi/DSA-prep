# mountainArr = [0, 8, 7, 6, 4, 3, 2, 0]
# peak = 8; index = 1

class Find_in_mountainArray():
    def __init__(self) -> None:
        pass
        
        
    def search(self, arr):
        start = 0
        end = len(arr) - 1

        while(start < end):
            mid = start + (end - start) // 2

            if arr[mid] < arr[mid + 1]:
                start = mid + 1
            
            elif arr[mid] > arr[mid + 1]:
                end = mid

        # At the end both start == end i.e our answer.
        return start
        
mountain_search_obj = Find_in_mountainArray()
output = mountain_search_obj.search([0, 8, 7, 6, 4, 3, 2, 0])
print(output)