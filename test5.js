//Test Cases 
inv1 = [4,0,1,3,0,2,5,0] //Expected Output: [4,0,0,1,3,0,0,2]
inv2 = [3, 2, 1] //Expected Output: [3, 2, 1]
inv3 = ["one", "two", "three"] //Expected Output: ["one", "two", "three"]

//Edge Cases
inv4 = 100 //Expected Output: Error X
inv5 = [0,0,0,0,0,0] //Expected Output:[0,0,0,0,0,0] 
inv6 = 1.73 //Expected Output: Error 

function checkStock(inventory){
    const stockLength = inventory.length 
    for (i = 0; i < stockLength; i++){
        if (inventory[i] === 0){
            inventory.splice(i, 0, 0)
            inventory.pop()
            i++
        }       
    }
};

console.log(checkStock(inv6))
console.log(inv6)