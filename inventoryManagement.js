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
