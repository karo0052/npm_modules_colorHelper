/* at first insert this in terminal 

npm install tinycolor2

*/

// then import the module and give it a name, in this case - colorHelper
import colorHelper from "tinycolor2";

/*the colorHelper accepts a lot of different colorinputs:

HEX:
colorHelper("#000");
colorHelper("#f0f0f6");

RGB/RGBA:
colorHelper("rgb (255, 0, 0)");
colorHelper("rgb 255 0 0");
colorHelper("rgba (255, 0, 0, .5)");

HSL/HSLA:
colorHelper("hsl(0, 100%, 50%)");
colorHelper("hsl 0 1.0 0.5");
colorHelper("hsla(0, 100%, 50%, .5)");

Named:
colorHelper("darkblue");
colorHelper("RED");

*/

/* colorHelper provides at lot of different methods
 - I've picked out the ones that I find most relevant */

// in my HTML I have created some boxes of which I change the backgroundcolor using colorHelper

// setAlpha() allows you to set the transparency/alpha value of the color. The number must be from 0-1.
const green = colorHelper("green");
document.querySelector(".box2").style.backgroundColor = colorHelper(
  "green"
).setAlpha(0.2);

// lighten() makes the color lighter in a range from 0-100
// 100 will always return white
// if you don't provide a value it will be ligthened with an amount of 10
document.querySelector(".box4").style.backgroundColor = colorHelper(
  "red"
).lighten();
document.querySelector(".box5").style.backgroundColor = colorHelper(
  "red"
).lighten(40);

// darken() makes the color darker in a range from 0-100
// 100 will always return black
// if you don't provide a value it will be darkened with an amount of 10
document.querySelector(".box7").style.backgroundColor = colorHelper(
  "purple"
).darken();
document.querySelector(".box8").style.backgroundColor = colorHelper(
  "purple"
).darken(40);

// greyscale() turns the colors into greyscale, in this case yellow and green
document.querySelector(".box9").style.backgroundColor = colorHelper("yellow")
  .greyscale()
  .toString();

document.querySelector(".box10").style.backgroundColor = colorHelper("green")
  .greyscale()
  .toString();

// random() makes a random color
const randomColor = colorHelper.random();
document.querySelector(".box11").style.backgroundColor = randomColor;

// converting colors. I use the random color from above as an example to show the different codes
// toHexString()
const hexColor = colorHelper(randomColor).toHexString();
document.querySelector(".hex").innerHTML = `HEX: ${hexColor}`;

// toRgbString()
const rgbColor = colorHelper(randomColor).toRgbString();
document.querySelector(".rgb").innerHTML = `RGB: ${rgbColor}`;

//toHsvString()
const hslColor = colorHelper(randomColor).toHslString();
document.querySelector(".hsl").innerHTML = `HSL: ${hslColor}`;
