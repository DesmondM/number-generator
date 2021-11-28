// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 export default function handler(req, res) {
  res.status(200).json({ Vouchers: vouchers })
}
 

const existCons = (str)=>{
    var flag1 = false;
    for(let i=0; i<str.length-2; i++){
        if(str[i]==str[i+1]&& str[i]==str[i+2]){
            console.log("There are consecutive " + str[i] +"'s");
            return true
            break
        }
    }
    return false
}
console.log(existCons("122335676788755"));

var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
var vouchers = []
var charactersLength = characters.length;

for (var j = 0; j<=400; j++){
var result = ""
for ( var i = 0; i < 10 ; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
if (existCons(result)){
     console.log(result + " random number with consecutives ")

}else{
    console.log(result + " random number isina zvayo ")
    if(vouchers.indexOf(result)===-1){
        vouchers.push(result);
    }
}

}

console.log("There are "+vouchers.length + " vouchers");
console.log(vouchers)
