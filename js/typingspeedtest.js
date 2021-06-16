
const TIME_LIMIT_END = 60;

// define quotes to be used
const quotes_array = [
    "Hallo ik ben pieter post, en ik breng elke maandag de post.",
    "de kat krapt de krullen van de trap.",
    "De paanse prins spreekt prima spaans.",
    "It's going to be hard, but hard does not mean impossible."
];

// selecting required elements
const timer_text = document.querySelector(".curr_time_timer");
const accuracy_text = document.querySelector(".curr_accuracy_timer");
const error_text = document.querySelector(".curr_errors_timer");

const quote_text = document.querySelector(".quote");
const input_area = document.querySelector(".input_area");
const restart_btn = document.querySelector(".restart_btn");

const error_group = document.querySelector(".errors");
const accuracy_group = document.querySelector(".accuracy");

let timeLeft = TIME_LIMIT_END;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;

let iscorrect = false;

function updateQuote() {
    quote_text.textContent = null;
    const random = Math.floor(Math.random() * quotes_array.length);


    current_quote = quotes_array[random];

    // separate each character and make an element
    // out of each of them to individually style them
    current_quote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quote_text.appendChild(charSpan)
    })


}

/* function processCurrentTextAreaData(event) {
    if (iscorrect == false) {

    }
} */
function processCurrentTextAreaData(event) {

    // get current input text and split it
    curr_input = input_area.value;
    curr_input_array = curr_input.split('');

    // increment total characters typed
    characterTyped++;

    errors = 0;

    quoteSpanArray = quote_text.querySelectorAll('span');
    quoteSpanArray.forEach((char, index) => {
        const typedChar = curr_input_array[index]

        // characters not currently typed
        if (typedChar == null) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
            iscorrect = true;
            // correct characters
        } else if (typedChar === char.innerText) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');

            iscorrect = true;
            // incorrect characters
        } else {
            char.classList.add('incorrect_char');
            char.classList.remove('correct_char');
            iscorrect = false;


            // increment number of errors
            errors++;


        }

    });

    // display the number of errors
    error_text.textContent = total_errors + errors;
    console.log('total_errors = ',errors);
    if(errors>0){
        event.preventDefault();
        return false;
    }
    // update accuracy text
    let correctCharacters = (characterTyped - (total_errors + errors));
    let accuracyVal = ((correctCharacters / characterTyped) * 100);
    accuracy_text.textContent = Math.round(accuracyVal);

    // if current text is compvarely typed
    // irrespective of errors
    if (curr_input.length == current_quote.length) {
        //updateQuote();

        // update total errors
        total_errors += errors;

        // clear the input area
        // input_area.value = "";
    }


}

function updateTimer() {
    if (timeLeft > 0) {
        // decrease the current time left
        timeLeft--;

        // increase the time elapsed
        timeElapsed++;

        // update the timer text
        timer_text.textContent = timeLeft + "s";
    }
    else {
        // finish the game
        EndTimer();
    }
}

function EndTimer() {
    // stop the timer
    clearInterval(timer);

    // disable the input area
    input_area.disabled = true;

    // show finishing text
    quote_text.textContent = "Click on restart to start a new game.";



}


function startTimer() {

    resetValues();
    updateQuote();

    // clear old and start a new timer
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetValues() {
    timeLeft = TIME_LIMIT_END;
    timeElapsed = 0;
    errors = 0;
    total_errors = 0;
    accuracy = 0;
    characterTyped = 0;
    quoteNo = 0;
    input_area.disabled = false;

    input_area.value = "";
    quote_text.textContent = 'Click on the area below to start the game.';
    accuracy_text.textContent = 100;
    timer_text.textContent = timeLeft + 's';
    error_text.textContent = 0;

}
