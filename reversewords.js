/*reverse the words without changing the order*/
/*input:-"react is a library"
/*output:-"tcaer si a yrarbil"*/

let str="react is a library";
function rev(str){
let b=str.split(" ");
let c=b.map((i)=>i.split("").reverse().join(''));
return c.join(' ');
}
let a=rev(str);
console.log(a);
