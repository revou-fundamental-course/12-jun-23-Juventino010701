// takes value from the input form from HTML element which have id.
const CelciusInput = document.getElementById("Celcius");
const FahrenheitInput = document.getElementById("Fahrenheit");
const FormulaInput = document.getElementById("Formula");

// takes value from the inputs form from HTML element which have class name "input".
const inputs = document.getElementsByClassName("input");

// performs a loop with counts starting at 0. then an unlimited number of counts which increments +1 when incremented or decremented.
for (let i=0; i<inputs.length; i++) {
    let input = inputs[i];

    // functions to create a change event for DOM manipulation purposes
    input.addEventListener ("input", function(e) {

        // displays conversion values ​​from Celsius, Fahrenheit, and formulas automatically without having to click the start button
        let value = parseFloat (e.target.value);

        // to checks the value based on the given name against the available components.
        switch (e.target.name) {
            
            // convert celcius to fahrenheit 
            case "Celcius":
                FahrenheitInput.value = (value * 1.8) + 32;

                // function to show the formula of celsius to fahrenheit conversion.
                FormulaInput.value = "(" + value + " * 1.8) + 32";
                break;

            // convert fahrenheit to celcius 
            case "Fahrenheit":
                CelciusInput.value = (value - 32) / 1.8;

                // function to show the formula of fahrenheit to celcius conversion.
                FormulaInput.value = "(" + value + " - 32) / 1.8";
                break;
        }
    });
}
