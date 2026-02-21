## Project Title: AD 311 Tech Interview Prep: Inventory Management System Update | Array
#### By: Amde Wubshet

### FAQ: 
- Time Complexity: O(n) (Linear Time). 
- Space Complexity: 1(n) (Constant Space).

#### How does the function work? 
- The function "checkStock(inventory)" looks at the input array of the stock count of different products in a store, and modifies the array itself. There is no separate output array; the inventory array will be modified in place.
    - The for loop has three expressions that define the iterations of the loop: 
        - i = 0, an accumulator variable
        - i < stockLength, where stockLength is the length of the inventory array. 
        - i++, executed every time after the code block has been executed
    - The if statement is the meat and bones of the function: 
        - in the case that the ith index of the input array is equal to 0, the function duplicates the 0 to indicate a restock order, and pops the latest element to emulate the shifting the product counts rightward.       


### Test Cases: 
- inv1 = [4,0,1,3,0,2,5,0] // Expected Output: [4,0,0,1,3,0,0,2]
- inv2 = [3, 2, 1] // Expected Output: [3, 2, 1]
- inv3 = ["one", "two", "three"] // Expected Output: ["one", "two", "three"]

### Edge Cases: 
- inv4 = 100 // Expected Output: 100
- inv5 = [0,0,0,0,0,0] // Expected Output:[0,0,0,0,0,0] 
- inv6 = 1.73 // Expected Output: 1.73 

### Flowchart
![alt text](https://github.com/amdemw206-coder/TIP_Week4_InventoryManagement_AD311/blob/main/snapshots/inventory_flowchart.png)