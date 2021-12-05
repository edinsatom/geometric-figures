

const PI = Math.PI;
const measure = 'cms';
const measure2 = 'cms^2'


//#region boxes calcs

function boxPerimeter(boxSide) {
    return `${boxSide * 4}cms`;
}

function boxArea(boxSide) {
    return `${boxSide ** 2}cms^2`;
}

//#endregion boxes calcs

//#region triangles calcs

function trianglePerimeter(triangleBase, triangleHeight) {
    return `${(triangleHeight * 2) + triangleBase}cms`;
}

function triangleArea(triangleBase, triangleHeight) {
    return `${(triangleBase * triangleHeight) / 2}cms^2`;
}


//#endregion triangles calcs


//#region circles calcs

function circleDiameter(circleRadio) {
    return circleRadio * 2;
}

function circlePerimeter(circleRadio) {
    return `${(circleDiameter(circleRadio) * PI).toFixed(2)} cms`;
}

function circleArea(circleRadio) {
    return `${(circleRadio ** 2 / PI).toFixed(2)} cms^2`;
}

//#endregion circles calcs

//#region Binding html

function calculatePerimeterBox() {
    const perimeter = document.getElementById('sidebox').value;
    if (perimeter == '') return;
    showResponse(boxPerimeter(Number(perimeter)));
}

function calculateAreaBox() {
    const perimeter = document.getElementById('sidebox').value;
    if (perimeter == '') return;
    showResponse(boxArea(Number(perimeter)));
}

function cleanSquare() {
    document.getElementById('sidebox').value = "";
}

function calculatePerimeterTriangle(){
    const base = document.getElementById('base').value;
    const sideTriangle = document.getElementById('sideTriangle').value;
    if (base == '' || sideTriangle == '') return;
    showResponse(trianglePerimeter(Number(base), Number(sideTriangle)));
}

function calculateAreaTriangle(){
    const base = document.getElementById('base').value;
    const sideTriangle = document.getElementById('sideTriangle').value;
    if (base == '' || sideTriangle == '') return;
    showResponse(triangleArea(Number(base), Number(sideTriangle)));
}

function cleanTriangle() {
    document.getElementById('base').value = "";
    document.getElementById('sideTriangle').value = "";
}

function calculatePerimeterCircle(){
    const radio = document.getElementById('radio').value;
    if (radio == '') return;
    showResponse(circlePerimeter(Number(radio)));
}

function calculateAreaCircle(){
    const radio = document.getElementById('radio').value;
    if (radio == '') return;
    showResponse(circleArea(Number(radio)));
}

function cleanCircle() {
    document.getElementById('radio').value = "";
}


function showResponse(response) {
    if (document.getElementById('response').style.display != 'block') {
        document.getElementById('response-value').innerText = response;
        document.getElementById('response').style.display = 'block';
    }
}

function hideResponse() {
    document.getElementById('response').style.display = 'none';
    document.getElementById('response-value').innerText = '';
}

//#endregion


