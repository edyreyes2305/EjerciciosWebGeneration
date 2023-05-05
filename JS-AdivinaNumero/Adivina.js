const pregunta = document.getElementById("pregunta");
const botonSi = document.getElementById("botonSi");
const botonMayor = document.getElementById("botonMayor");
const botonMenor = document.getElementById("botonMenor");


numbers = [];
for (let i = 0; i <= 100; i++) {
numbers.push(i);
}

console.log(numbers);


const binarySearch = (arr, valor) => {   
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == valor)
            return pregunta.innerHTML = `${mid}`;
        if (arr[mid] > valor)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return -1;
}
    
    x = 99;
    result = binarySearch(numbers, x);
     
if (result == -1) {
    console.log("Element is not present in array");
} else {
    console.log("Element is present at index " + result);
}
               