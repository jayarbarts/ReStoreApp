function addBinary(n) {
    const binary = n.split(',');
    let sum = '';
    let carry = '';
    for (let i=binary[0].length-1; i>=0; i--) {
        if (binary[0][i] == binary[1][i]) {
            sum = carry != 1 ? '0' + sum : '1' + sum;
            carry = binary[0][i] == '1' ? '1' : '';
        } else {
            sum = carry != 1 ? '1' + sum : '0' + sum;
            carry != 1 ? '' : '1';
        }
    }
    return carry+sum;
}

const binary = '10101010,11001100';
console.log(addBinary(binary));