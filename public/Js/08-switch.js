"use strict";
var age = 18
var print;
switch (age) {
  case 18:
    print = "eres mayor de edad";
    break;
  case 40:
    print = "estas en la crisis de los 40";
  default:
    print = "tu edad es neutra";
    break;
}

console.log(print)