function operate(operator, a, b){
    if (operator == "+"){
        return (a + b)
    } else if (operator == "-"){
        return (a-b)
    }else if (operator == "*"){
        return (a*b)
    }else if (operator == "/"){
        return (a/b)
    }
}

const number1 = document.getElementById('#1')
const number2 = document.getElementById('#2')
const number3 = document.getElementById('#3')
const number4 = document.getElementById('#4')
const number5 = document.getElementById('#5')
const number6 = document.getElementById('#6')
const number7 = document.getElementById('#7')
const number8 = document.getElementById('#8')
const number9 = document.getElementById('#9')
const number0 = document.getElementById('#0')

const mOperator = document.getElementById('#multiply')
const dOperator = document.getElementById('#divide')
const sOperator = document.getElementById('#subtract')
const aOperator = document.getElementById('#add')


number1.addEventListener('click', () => save(1))

let i = 0
let first = 0
let second = 0
let operator = ""

function save(x){
    if (i = 0){
        first = x
        ++i
        console.log(first)
    } else if (i = 1){
        operator = x
        ++i
    } else if(i=2){
        second = x
        ++i
    }
}