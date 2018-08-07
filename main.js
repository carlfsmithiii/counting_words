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
    let workingString = "";
    for (let element of array) {
        workingString += generateNumberWords(element);
        workingString += ", "
    }
    workingString = workingString.slice(0, workingString.length - 2);
    workingString += "."
    paragraph.appendChild(document.createTextNode(workingString));
    document.body.appendChild(paragraph);
}

function generateNumberWords(number) {
    let workingString = "";

    const thousandsDigit = floor(number, 1000);
    number -= thousandsDigit * 1000;
    const hundredsDigit = floor(number, 100);
    number -= hundredsDigit * 100;
    const lastTwoDigits = number;
    
    workingString += thousandsWord(thousandsDigit);
    workingString += hundredsWord(hundredsDigit);

    if (lastTwoDigits < 20) {
        workingString += lessThanTwentyString(lastTwoDigits);
    } else {
        workingString += tensWord(Math.floor(lastTwoDigits / 10));
        workingString += singleDigitsWord(lastTwoDigits % 10);
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
    switch (digit) {
        case 9:
            return " nine hundred";
        case 8:
            return " eight hundred";
        case 7:
            return " seven hundred";
        case 6:
            return " six hundred";
        case 5:
            return " five hundred";
        case 4:
            return " four hundred";
        case 3:
            return " three hundred";
        case 2:
            return " two hundred";
        case 1:
            return " one hundred";
        default:
            return "";
    }
}

function tensWord(digit) {
    switch (digit) {
        case 9:
            return " ninety";
        case 8:
            return " eighty";
        case 7:
            return " seventy";
        case 6:
            return " sixty";
        case 5:
            return " fifty";
        case 4:
            return " forty";
        case 3:
            return " thirty";
        case 2:
            return " twenty";
        default:
            return "";
    }    
}

function singleDigitsWord(digit) {
    switch (digit) {
        case 9:
            return " nine";
        case 8:
            return " eight";
        case 7:
            return " seven";
        case 6:
            return " six";
        case 5:
            return " five";
        case 4:
            return " four";
        case 3:
            return " three";
        case 2:
            return " two";
        case 1:
            return " one";
        default:
            return "";
    }    
}

function lessThanTwentyString(number) {
    switch (number) {
        case 20:
            return " twenty";
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
            return string =  singleDigitsWord(number % 10);
        
    }
}

function floor(number, divisor) {
    return Math.floor(number / divisor);
}

populatePage(1000);