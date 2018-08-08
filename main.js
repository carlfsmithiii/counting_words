function generateArray(max) {
    const array = [];
    for (let i = 1; i <= max; i++) {
        array.push(i);
    }
    return array;
}

function populatePage(max) {
    const array = generateArray(max);
    const paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(getStringOfAllNumbersAsWords(array)));
    document.body.appendChild(paragraph);
}

function getStringOfAllNumbersAsWords(array) {
    let workingString = "";
    for (let element of array) {
        workingString += generateNumberWords(element) + ", ";
    }
    workingString = workingString.slice(0, workingString.length - 2) + ".";
    return workingString;
}

function generateNumberWords(number) {
    const [thousandsDigit, hundredsDigit, tensDigit, onesDigit] = [...((number).toString().padStart(4, "0"))];
    
    let workingString = thousandsWord(thousandsDigit) + hundredsWord(hundredsDigit);

    if (tensDigit == 1) {
        workingString += lessThanTwentyString(tensDigit, onesDigit);
    } else {
        workingString += tensWord(tensDigit) + singleDigitsWord(onesDigit);
    }
    
    return workingString;
}

function thousandsWord(digit) {
    if (digit === 1) {
        return " one thousand";
    } else {
        return "";
    }
}

function hundredsWord(digit) {
    const hundreds = [
        "", 
        " one hundred", 
        " two hundred", 
        " three hundred", 
        " four hundred", 
        " five hundred", 
        " six hundred", 
        " seven hundred", 
        " eight hundred", 
        " nine hundred"
    ];
    return hundreds[digit];
}

function tensWord(digit) {
    const tens = [
        "", 
        "", // values less than 20 are handled by a separate function
        " twenty", 
        " thirty", 
        " forty",
        " fifty", 
        " sixty", 
        " seventy", 
        " eighty", 
        " ninety"
    ];
    return tens[digit];
}

function singleDigitsWord(digit) {
    const oughts = [
        "", // zero is not printed
        " one", 
        " two", 
        " three", 
        " four",
        " five", 
        " six", 
        " seven", 
        " eight", 
        " nine"
    ];
    return oughts[digit];
}

function lessThanTwentyString(tensDigit, onesDigit) {
    switch (Number(tensDigit) * 10 + Number(onesDigit)) {
        case 19:
            return " nineteen";
        case 18:
            return " eighteen";
        case 17:
            return " seventeen";
        case 16:
            return " sixteen";
        case 15:
            return " fifteen";
        case 14:
            return " fourteen";
        case 13:
            return " thirteen";
        case 12:
            return " twelve";
        case 11:
            return " eleven";
        case 10:
            return " ten";
        default:
            return string =  singleDigitsWord(onesDigit);
    }
}

populatePage(1000);