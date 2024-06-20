function moveObject(n) {
    const input = n.split(',');
    let matrix = [];
    for (let i=1; i<input.length-1; i++) {
        let tempMatrix = input[i].split(' ');
        matrix.push([tempMatrix]);
    }
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            switch (input[0]) {
                case 'left':
                    matrix[i][j][0] = matrix[i][j][0] + matrix[i][j][1];
                    matrix[i][j][1] = matrix[i][j][2] + matrix[i][j][3];
                    matrix[i][j][2] = 0;
                    matrix[i][j][3] = 0;
                    break;
                case 'right':
                    matrix[i][j][0] = 0;
                    matrix[i][j][1] = 0;
                    matrix[i][j][2] = matrix[i][j][0] + matrix[i][j][2];
                    matrix[i][j][3] = matrix[i][j][2] + matrix[i][j][3];
                    break;
            
                default:
                    break;
            }
        }
    }
}