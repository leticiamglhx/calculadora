let runningtotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen1');

function buttonClick(value){
    if(isNaN(value)){
        handleNumble(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C' :
            buffer = '0';
            runningtotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningtotal;
            runningtotal = 0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;   
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal =intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousOperator ==='+'){
        runningTotal+= intBuffer;
    }else if(previousOpeerator === '-'){
        runningtotal -= intBuffer
    }else if( previousOperator === )
}