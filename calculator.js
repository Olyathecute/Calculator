function writeNumbers(number) { document.getElementById("num").value += number }
function blockPoint(pointButton) { pointButton.disabled = true }
const numbField =   document.getElementById("num")
const demoField =   document.getElementById("demo")
const signField =   document.getElementById("sign")
const resultField = document.getElementById("result")
const equalField =  document.getElementById("equal")
const pointButton = document.getElementById("point")

function c() {
    if (numbField.value === "" ) {
        demoField.value = ""
        signField.value = ""
        resultField.value = ""
        equalField.hidden = true
    } else {
        pointButton.disabled = false
        numbField.value = ""
    }
}

function nextNumber(sign) {
    if (isNaN(numbField.value)) alertWrongInput(numbField) 
    else if (resultField.value != "") {
        pointButton.disabled = false
        demoField.value = resultField.value
        signField.value = sign
        numbField.value = ""
        resultField.value = ""
    } else if (demoField.value != "") { 
        signField.value = sign
    } else {
        pointButton.disabled = false
        demoField.value = numbField.value
        signField.value = sign
        numbField.value = ""
    }  
}

function result() {
    if (isNaN(numbField.value)) alertWrongInput(numbField)
    else if (demoField.value === "" && numbField.value === "") {
        resultField.value = ""
    }
    else {
        let equation = `${demoField.value} ${signField.value} ${numbField.value}`
        resultField.value = eval(equation)
        equalField.hidden = false
    }
}

function alertWrongInput(number) {
    alert("Введите корректное число!")
    number.value = ""
}

