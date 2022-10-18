const nums=[1,2,3,4,5,6,7,8,9];
for (let ordinal of nums){
    if (ordinal===1){
        console.log(ordinal+'st');
    } else if (ordinal===2){
        console.log(ordinal+'nd');
    } else if (ordinal===3){
        console.log(ordinal+'rd');
    } else {
        console.log(ordinal+'th');
    }
}