var array = [[],[],[]]

array[0] = [0,1,2,3]
array[1] = [1,0,1,2]
array[2] = [2,1,0,1]

document.write(array[0].join(" ")+"<br>")
document.write(array[1].join(" ")+"<br>")
document.write(array[2].join(" ")+"<br>")

var numbers = [[2,3,4],[5,7,8],[0,9,1]]

document.write(numbers[1][2])

numbers.push([11,22,33])
document.write("<br>"+numbers[3])

/*********Quest. no 6 ********/
document.write("<h2>Counting:</h2><br>")
var i;
for(i = 0; i <= 15; i++){
    document.write(i+" ")
}

document.write("<h2>Reverse Counting</h2><br>")
var i;
for(i = 10; i >= 1; i--){
    document.write(i+" ")
}

document.write("<h2>Even:</h2><br>")
var i;
for(i = 0; i <= 20; i+=2){
    document.write(i+" ")
}

document.write("<h2>Odd:</h2><br>")
var i;
for(i = 1; i <= 20; i+=2){
    document.write(i+" ")
}

document.write("<h2>Series:</h2><br>")
var i;
for(i = 2; i <= 20; i+=2){
    document.write(i+"k ")
}


/*********Quest. 7 Search Array *****/

var items = ["cake","apple pie", "cookie", "chips","patties"];
var inp = prompt("Welcome to shan bakers \n what do you want to order");

for(var i = 0; i < items.length; i++){
    if(inp===items[i]){
        alert(inp+" is available at index "+ i)
        break
    }
}
if(i === items.length){
    alert(inp+ " is not available")
}

/******** Alert the largest number *********/
var A = [24,53,100,78,13,12,500]
var largest = A[0]
for(var i = 0; i < A.length; i++){
        if(A[i] > largest){
            largest = A[i]
        }
}
alert(largest + " is the largest number")


/*******Alert The Smallest number ********/
var A = [24,53,10,78,13,12,500]
var smallest = A[0];
for(var i = 0; i < A.length; i++){
        if(A[i] < smallest){
            smallest = A[i]
        }
}
alert(smallest + " is the smallest number")

/************ Quest 10  Multiple of 5 range 100 **********/

var i;
for(i = 5; i <= 100 ; i+=5){
    document.write(i + " ")
}

var i;
for(i = 1; i <= 20 ; i++){
    document.write(i*5 + " ")
}
