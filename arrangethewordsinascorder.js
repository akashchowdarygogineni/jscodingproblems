/*
input:-"hi i am akash Chowdary gogineni";
output:-"i am hi akash chowdary gogineni"*/

let str="hi i am akash chowdary gogineni";
function asc(str){
    let arr=str.split(' ');
    arr.sort((a,b)=>(a.length-b.length));
    return arr.join(" ");
      
}
let a=asc(str);
console.log(a);