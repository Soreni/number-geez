
module.exports = (paramn) =>{
   var number = isNatural(paramn);
if (number)
{  
   
     var param =paramn.toString();

    var geezArabicPair = {
        '0' : '',
        '1' : '፩',
        '2' : '፪',
        '3' : '፫',
        '4' : '፬',
        '5':  '፭',
        '6':  '፮',
        '7':  '፯',
        '8':  '፰',
        '9':  '፱',
        '10': '፲',
        '20': '፳',
        '30': '፴',
        '40': '፵',
        '50': '፶',
        '60': '፷',
        '70': '፸',
        '80': '፹',
        '90': '፺',
        '100':'፻',
        '10000' : '፼'
 }

    var finalGeez = "";
    var length = param.length;
    if(length%2!=0){param='0'+ param; length++;} // make length even to partition in groups of 2
    var index =1;
    
     if(paramn==100) // already represnted number
     {
         return geezArabicPair[paramn];
     }
     else if (paramn==10000) // already represnted number
     {
        return geezArabicPair[paramn];

     }

    for(var i=0 ; i<length; i+=2) // skip in two step coz grouped in pairs
    {
      var stringArabic = param[i] + param[i+1];
      ///from left to right
      var subscript = length/2 - index;
     /// conver to number
      var numArabic = Number(stringArabic); 
      var numArabic2 = numArabic%10;//numArabic2 and numArabic1 are the second and first digit of the converted number respectively
      var numArabic1 = numArabic - numArabic2;
      ///map number to geez
      var numGeez = geezArabicPair[numArabic1] + geezArabicPair[numArabic2];
     
      if(subscript%2==0 && subscript!=0)//even subscript
         numGeez = numGeez + '፼';
      else if (subscript%2 !=0 && subscript!=0)//odd subscript
          numGeez = numGeez + '፻';

    finalGeez = finalGeez + numGeez;
    index++;
    }


 return finalGeez;
   }

 else{
   console.log("Please insert a valid number!")
   return false;
    }
}

var isNatural = (num)=>{
    num=num.toString();
    var num1 = Math.abs(num),num2 = parseInt(num,10);
    return !isNaN(num1) && num2===num1 && num1.toString()===num;
};

