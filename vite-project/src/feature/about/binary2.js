
  
  function xor(a, b){return (a === b ? 0 : 1);}
  function and(a, b){return a == 1 && b == 1 ? 1 : 0;}
  function or(a, b){return (a || b);} 

function halfAdder(a, b){
    const sum = xor(a,b);
    const carry = and(a,b);
    return [sum, carry];
  }

  function fullAdder(a, b, carry){
    const halfAdd = halfAdder(a,b);
    const sum = xor(carry, halfAdd[0]);
    carry = and(carry, halfAdd[0]);
    carry = or(carry, halfAdd[1]);
    return [sum, carry];
  }
function addBinary(n) {
    const a = n.split(',');

  let sum = '';
  let carry = '';

  for(var i = a[0].length-1;i>=0; i--){
    if(i == a[0].length-1){
      //half add the first pair
      const halfAdd1 = halfAdder(a[0][i],a[1][i]);
      sum = halfAdd1[0]+sum;
      carry = halfAdd1[1];
    }else{
      //full add the rest
      const fullAdd = fullAdder(a[0][i],a[1][i],carry);
      sum = fullAdd[0]+sum;
      carry = fullAdd[1];
    }
  }

  return carry ? carry + sum : sum;
}


const binary = '10101010,11001100';
console.log(addBinary(binary));