function personalNums(arr){
    let nums = new Int16Array(arr.length);
    for (let i = 0; i < arr.length; i++){
        nums[i] = arr[i].length;
    }
    return nums;
}
function print(arr){
    let nums = personalNums(arr);
    let obj = new Array(arr.length);
    for (let i = 0; i < obj.length; i++){
        obj[i] = {Name: arr[i], Num: nums[i]};
        console.log(`Name: ${obj[i].Name} - Personal Number: ${obj[i].Num}`);
    }
}
print([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);