let str = "aabcccccaaa" 
    
// output = "a2b1c5a3."


// let charCountObj = {};


function string_Compression(str){
    let compressedStr = '';
    let charCount = 1;
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            charCount++;
        }else{
            compressedStr += str[i] + charCount;
            charCount = 1;
        }
    }
     return compressedStr.length < str.length ? compressedStr : str;
}
console.log(string_Compression(str))