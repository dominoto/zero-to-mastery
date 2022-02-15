//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

//Function expression
const answer = function (value) {

    //Ask for input
    value = prompt("Enter hex color code as #xxxxxx or RGB color code as x, x, x: ");

    //Test if input is in hex type with regex
    if (/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.test(value)) {
        let tempHex = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(value);
        console.log(tempHex);

        //Convert hex values to integer
        let rgbR = parseInt(tempHex[1], 16);
        let rgbG = parseInt(tempHex[2], 16);
        let rgbB = parseInt(tempHex[3], 16);

        console.log(`RGB value for ${value}: `);

        //Return values converted to RGB
        return rgbR + ", " + rgbG + ", " + rgbB;

        //Test if input is in RGB type with regex
    } else if (/\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b,\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b,\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b/.test(value)) {
        let tempRGB = /\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b,\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b,\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b/.exec(value);

        //Convert RGB string values to RGB numbers, then to hex
        let hexR = parseInt(tempRGB[1]).toString(16);
        let hexG = parseInt(tempRGB[2]).toString(16);
        let hexB = parseInt(tempRGB[3]).toString(16);

        console.log(`Hex value for ${value}: `);

        //Return values converted to hex and prefix a 0 if number is one digit
        return "#" + (hexR.length === 1 ? "0" + hexR : hexR) + (hexG.length === 1 ? "0" + hexG : hexG) + (hexB.length === 1 ? "0" + hexB : hexB);

        //Error message if input is not compatible
    } else {
        console.log("Wrong input!");
    }
}

//Calling the function
answer();
