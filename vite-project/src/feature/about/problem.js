function problem(start, end) {
    let startTime = 0;
    let timeGroup = [];
    let group = [];
    let finalGroup = [];
    for (let i=0; i < start.length; i++) {
            let group = {
            'start': start[i],
            'end': end[i]};
            timeGroup.push(group);
    }
    timeGroup.sort((a, b) => {
        return a.start - b.start;
    });


    for (let j=1; j < 10; j++) {
        let group = {};
        for (let i=0; i<timeGroup.length; i++) {
            let tempGroup = [];
            if (timeGroup[i].start === j) {
                tempGroup.push({ 'client': timeGroup[i].start});
                group[j-1] = tempGroup;
            }
        }
        finalGroup.push(group);
        for (let i=0; i<timeGroup.length; i++) {
            for (let k=i+1; k<(timeGroup[i].end + timeGroup[i].start -1); k++) {
                if (timeGroup[i].end + timeGroup[i].start -1 > j) {
                    for (let l=0; l<finalGroup.length;l++) {
                        if (finalGroup[l][`${k}`]) {
                            for (let m=0; m<finalGroup[l][`${k}`].length; m++) {
                                finalGroup[l][`${k}`].push({ 'client': timeGroup[i].start});
                            }
                        }
                        else {
                            let tempGroup = [];
                            tempGroup.push({ 'client': timeGroup[i].start});
                            group[k] = tempGroup;
                        }
                    }
                }
            }
        }
    }
    console.log(...finalGroup)
    let max = 0;
    for (let i=0; i<finalGroup.length; i++) {
        if (finalGroup[i].length > max) {
            max = finalGroup[i].length;
        }
    }
    return max;
}
const start = [1, 5, 7, 8];
const end = [5, 8, 9, 3];
const value = problem(start, end);
console.log(value);