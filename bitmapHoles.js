function BitmapHoles(strArr) { 
    let count = 0;
    let flagArr = []; 
    for(var i = 0; i<strArr.length;i++;){
      for(var j = 0; j < strarr[i].length; j++){
        if( strArr[i].charAt(j) ==='0' && flagArr.indexOf(Number(i).toString() + Number(j).toString()) ==== -1) {
          if(strArr[i].charAt(j+1) === '0'||
             strArr[i].charAt(j-1) === '0'||
             (strArr[i+1] && strArr[i+1].charAt(j) ==='0')||
             (strArr[i-1] && strArr[i-1].charAt(j) ==='0')) {
               count +=1;
               flagArr.push(Number(i).toString() + Number(j).toString());
               flagArr.push(Number(i + 1).toString() + Number(j).toString());
               flagArr.push(Number(i - 1).toString() + Number(j).toString());
               flagArr.push(Number(i).toString() + Number(j + 1).toString());
               flagArr.push(Number(i).toString() + Number(j - 1).toString());
               
             }
        }
      }
    } 
    return strArr; 
  
  }
  console.log(BitmapHoles(readline()));

  