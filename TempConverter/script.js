function ferToCel(temp) {//fahrenheit to Celsius
    return (temp - 32) * (5/9);
}


function celToFer(temp){//Celsius to fahrenheit
    return (temp * (9/5)) + 32;
}

function kelToCel(temp) {
    return temp - 273.15;
}

function celToKel(temp) {
    return temp + 273.15;
}

function kelToFer(temp){
    let newTemp = kelToCel(temp);

    return celToFer(newTemp);
}

function ferToKel(temp){
    let newTemp = ferToCel(temp);

    return celToKel(newTemp);
}


const convert = (box1, box2, value) => {
    if(box1 == 1){
        if(box2 == 2){

            return ferToCel(value);

        }else if(box2 == 3){
            return ferToKel(value);
        }
        
    }else if(box1 == 2){
        if(box2 == 1){

            return celToFer(value);

        }else if(box2 == 3){

            return celToKel(value);

        }

    }else{
        if(box2 == 1){

            return kelToFer(value)

        }else if(box2 == 2){
            return kelToCel(value)
        }

    }
}


//Real work

const box1 = () => {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");

    let box1Text = document.getElementById("box1Temp");
    let box2Text = document.getElementById("box2Temp");


    

    if(box1.value === box2.value){
        if(!(isNaN(box1Text.value))){
            box2Text.value = box1Text.value;
        }

        
        
    }else{
        let value = convert(box1.value, box2.value, box1Text.value);

        box2Text.value = value
    }

}


const box2 = () => {
    let box1 = document.getElementById("box2");
    let box2 = document.getElementById("box1");

    let box1Text = document.getElementById("box2Temp");
    let box2Text = document.getElementById("box1Temp");

    if(box1.value === box2.value){
        if(!(isNaN(box1Text.value))){
            box2Text.value = box1Text.value;
        }

        
        
    }else{
        let value = convert(box1.value, box2.value, box1Text.value);

        box2Text.value = value
    }

}