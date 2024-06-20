const str = '^^^^';

function solution(str) {
    let max = 0;
    let start = []
    for (let i=0; i<str.length;i++) {
        if (str[i] !== str[i+1]) {
            start.push(i);
        }
    }
    for (let i=0; i< start.length; i++) {
        if (max < start[i+1]-start[i]) {
            max = start[i+1] - start[i];
        }
    }
    console.log(max)
    return max;
}

solution(str);