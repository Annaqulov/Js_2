//1-VAZIFA 
var age = prompt( "yoshingiz kiritig")
if(age <= 18){
    console.log("yoshsiz o'qishingiz kerak");
}else if(age <=50){
    console.log("Ishlashingiz kerak");
}else if(age <=59){
    console.log("Yaqinda nafaqaga chiqasiz");
}else if(age <=150){
    console.log("Manimcha nafaqada bo'lsangiz kerak");
}else{
   alert("nimadur noturi ketib qoldi")
}


//2-VAZIFA
var num1 = +prompt('1: ');
var num2 = +prompt('2: ');
var num3 = +prompt('3: ');

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    console.log(num1);
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    console.log(num2);
} else if ((num3 > num2 && num3 < num1) || (num3 < num2 && num3 > num1)) {
    console.log(num3);
}


//3-VAZIFA
var boss = "Mamadiyor"
var name = prompt("Ism yozing");
if (boss == name) {
    alert('hello boss')
} else {
    alert('hello guest')
}