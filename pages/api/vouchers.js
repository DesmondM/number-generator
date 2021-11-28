// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 export default function handler(req, res) {
  res.status(200).json({ Vouchers: vouchers })
}
 
const existConsecutives = (str)=>{
    
    for(let i=0; i<str.length-2; i++){
        if(str[i]==str[i+1]&& str[i]==str[i+2]){
          //  console.log("There are consecutive " + str[i] +"'s");
            return true
            break
        }
    }
    return false
}

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var vouchers = []
var charactersLength = characters.length;

var accepedVouchers=0
var rejectedVouchers =0  // to roughly check the code's repetation rate

while (accepedVouchers<40000){
var voucher = ""
for ( var i = 0; i < 10 ; i++ ) {
    voucher += characters.charAt(Math.floor(Math.random() * charactersLength));
}
if (existConsecutives(voucher)){
     //console.log(voucher + " Bad Voucher ")
     rejectedVouchers++;
}else{
    //console.log(voucher + " Good voucher ")
    if(vouchers.indexOf(voucher)===-1){
        vouchers.push(voucher);
        accepedVouchers++;
    }else{rejectedVouchers++;}
}

}


console.log("There are "+rejectedVouchers + " bad vouchers");
console.log("There are "+vouchers.length + " vouchers");
console.log(vouchers)