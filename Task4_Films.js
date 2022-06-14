function addMovies(arr){
    let objArr = [];
    for (let i = 0; i < arr.length; i++){
        let str = arr[i].split(' ');
        if (str.includes("addMovie")){
            objArr[i] = {name: movieName(arr[i]), director: null, date: null};
        }
        else if (str.includes("directedBy")){
            addDirector(arr[i], objArr);
        }
        else if (str.includes("onDate", objArr)){
            addDate(arr[i], objArr);
        }
    }
    printJSON(objArr);
}
function movieName(str){
    return str.replace("addMovie ", "");
}
function addDirector(str, objArr){
    str = str.split(" directedBy ");
    let name = str[0];
    for (let i = 0; i < objArr.length; i++){
        if (objArr[i].name == name){
            objArr[i].director = str[1];
        }
    }
}
function addDate(str, objArr){
    str = str.split(" onDate ");
    let name = str[0];
    for (let i = 0; i < objArr.length; i++){
        if (objArr[i].name == name){
            objArr[i].date = str[1];
        }
    }
}
function printJSON(objArr){
    objArr = JSON.stringify(objArr);
    console.log(objArr);
}
addMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);