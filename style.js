// Triangle section triangle

function calculateTriangleArea(){
const triangleBaseInput = document.getElementById(`triangle-base`);
const triangleBaseText = triangleBaseInput.value;
const base = parseFloat(triangleBaseText);
console.log(base);


const triangleHightInput = document.getElementById(`triangle-hight`);
const triangleHightText = triangleHightInput.value;
const hight = parseFloat(triangleHightText);
console.log(hight);


const area = 0.5 * base * hight;
console.log(`area of the tringle is:`, area);


const triangleAreaSpan = document.getElementById(`triangle-area`);
triangleAreaSpan.innerText = area;
}

// Rectangle section  rectangle
function calculateRectangleArea(){
  
        const rectangleBaseInput = document.getElementById(`rectangle-base`);
        const rectangleBaseText = rectangleBaseInput.value;
        const base = parseFloat(rectangleBaseText);
        console.log(base);
        
        
        const rectangleHightInput = document.getElementById(`rectangle-hight`);
        const rectangleHightText = rectangleHightInput.value;
        const hight = parseFloat(rectangleHightText);
        console.log(hight);
        
        
        const area = 0.5 * base * hight;
        console.log(`area of the rectangle is:`, area);
        
        
        const rectangleAreaSpan = document.getElementById(`rectangle-area`);
        rectangleAreaSpan.innerText = area;   
}
// Parallelogram section  parallelogram
function calculateParallelogramArea(){
  
    const parallelogramBaseInput = document.getElementById(`parallelogram-base`);
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);
    
    
    const parallelogramHightInput = document.getElementById(`parallelogram-hight`);
    const parallelogramHightText = parallelogramHightInput.value;
    const hight = parseFloat(parallelogramHightText);
    console.log(hight);
    
    
    const area =  base * hight;
    console.log(`area of the parallelogram is:`, area);
    
    
    const parallelogramAreaSpan = document.getElementById(`parallelogram-area`);
    parallelogramAreaSpan.innerText = area;   
}
// Rhombus section  rhombus
function calculateRhombusArea(){
  
    const rhombusBaseInput = document.getElementById(`rhombus-base`);
    const rhombusBaseText = rhombusBaseInput.value;
    const base = parseFloat(rhombusBaseText);
    console.log(base);
    
    
    const rhombusHightInput = document.getElementById(`rhombus-hight`);
    const rhombusHightText = rhombusHightInput.value;
    const hight = parseFloat(rhombusHightText);
    console.log(hight);
    
    
    const area = base * hight;
    console.log(`area of the rhombus is:`, area);
    
    
    const rhombusAreaSpan = document.getElementById(`rhombus-area`);
    rhombusAreaSpan.innerText = area;   
}
// Pentagon section pentagon
function calculatePentagonArea(){
  
    const pentagonBaseInput = document.getElementById(`pentagon-base`);
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText);
    console.log(base);
    
    
    const pentagonHightInput = document.getElementById(`pentagon-hight`);
    const pentagonHightText = pentagonHightInput.value;
    const hight = parseFloat(pentagonHightText);
    console.log(hight);
    
    
    const area =  base * hight;
    console.log(`area of the pentagon is:`, area);
    
    
    const pentagonAreaSpan = document.getElementById(`pentagon-area`);
    pentagonAreaSpan.innerText = area;   
}
// Ellipse section ellipse
function calculateEllipseArea(){
  
    const ellipseBaseInput = document.getElementById(`ellipse-base`);
    const ellipseBaseText = ellipseBaseInput.value;
    const base = parseFloat(ellipseBaseText);
    console.log(base);
    
    
    const ellipseHightInput = document.getElementById(`ellipse-hight`);
    const ellipseHightText = ellipseHightInput.value;
    const hight = parseFloat(ellipseHightText);
    console.log(hight);
    
    
    const area = base * hight;
    console.log(`area of the ellipse is:`, area);
    
    
    const ellipseAreaSpan = document.getElementById(`ellipse-area`);
    ellipseAreaSpan.innerText = area;   
}