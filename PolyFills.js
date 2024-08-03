let arr = [1,2,3,4,5,6]


Array.prototype.myForEach = function(callback){
    for(let index=0;index<this.length;index++){
        callback(this[index],index,this)
    }
}

arr.myForEach((curVal)=>{
   console.log(curVal * 2)
})


Array.prototype.myMap = function(callback){
    let result = [];
    for(let index=0;index<this.length;index++){
        result.push(callback(this[index],index,this))
    }
    return result;
}


const newArr = arr.myMap((ar)=>{
    return ar * 4
})

console.log(newArr)

Array.prototype.myFind = function(callback){
    for(let index=0;index<this.length;index++){
        if(callback(this[index],index,this)){
            return this[index]
        }
    }
}


let result = arr.myFind(val => val > 3)

console.log(result);


Array.prototype.myFilter = function(callback){
    let result = [];
    for(let index=0;index<this.length;index++){
        if(callback(this[index],index,this))
        result.push(this[index])
    }
    return result;
}


let filteredData = arr.myFilter((val) => val > 2)

console.log(filteredData)