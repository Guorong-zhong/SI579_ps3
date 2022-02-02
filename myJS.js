/*
* Excercise 1
*
*/

const colorBlock = document.getElementById("color-block");
const colorName = document.getElementById("color-name");
console.log(colorBlock);
console.log(colorName);
colorBlock.addEventListener('click',(e) => {
    // colorName.textContent = "#809af0";
    // colorBlock.style.backgroundColor='#809af0';

    // colorBlock.addEventListener('click', (e) => {
    //     colorName.textContent = "#F08080";
    //     colorBlock.style.backgroundColor='#F08080';

    // });
    // console.log("enter listener")
    changeColor();
 });



/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    // console.log("enter changeColor()")
    //Write a condition determine what color it should be changed to
    if(colorName.textContent == "#F08080"){
        console.log("e")
        //change the background color using JS
        colorBlock.style.backgroundColor='#809af0';
        
        //Change the text of the color using the span id color-name
        colorName.textContent = "#809af0";
        console.log(colorName.textContent)

    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor='#F08080';
        //Change the text of the color using the span id color-name
        colorName.textContent = "#F08080";


    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convertBtn = document.getElementById('convertbtn');
const inputF = document.getElementById("f-input");
const outputC = document.getElementById("c-output");

convertBtn.addEventListener('click', (e) => {
    convertTemp();
});

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    Ftemp = inputF.value;
    console.log(Ftemp);
    Ctemp = (Ftemp-32) * 5/9;
    //Send the calculated temperature to HTML
    outputC.textContent = Ctemp;
}


