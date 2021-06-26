var opc1 = "Piedra";
var opc2 = "Papel";
var opc3 = "Tijeras";

function random(){
    var opc_cpu = ["Piedra", "Papel", "Tijeras"];
    valueToUse = opc_cpu[Math.floor(Math.random() * opc_cpu.length)];
    console.log(valueToUse);
    return valueToUse;

}

function evaluar(){

        if(document.getElementById('opc1').checked) {
            user = opc1;
        }else if(document.getElementById('opc2').checked){
            user = opc2;
        }else if(document.getElementById('opc3').checked){
            user = opc3;
        }else{
            alert("Selecciona una opción");
        }

       switch(user) {
        case 'Piedra':
            piedra();
            break;
        case 'Papel':
            papel();
            break;
        case 'Tijeras':
            tijeras();
            break;
       }
}

function piedra(){
    cpu = random();

    if(cpu=="Piedra"){
        alert(`Empate el CPU eligio ${cpu}`);
    }else if(cpu=="Papel"){
        alert(`Perdiste el CPU eligio ${cpu}`);
    }else if(cpu=="Tijeras"){
        alert(`Ganaste el CPU eligio ${cpu}`);
    }
}

function papel(){
    cpu = random();

    if(cpu=="Piedra"){
        alert(`Ganaste el CPU eligio ${cpu}`);
    }else if(cpu=="Papel"){
        alert(`Empate el CPU eligio ${cpu}`);
    }else if(cpu=="Tijeras"){
        alert(`Perdiste el CPU eligio ${cpu}`);
    }
}

function tijeras(){
    cpu = random();

    if(cpu=="Piedra"){
        alert(`Perdiste el CPU eligio ${cpu}`);
    }else if(cpu=="Papel"){
        alert(`Ganaste el CPU eligio ${cpu}`);
    }else if(cpu=="Tijeras"){
        alert(`Empate el CPU eligio ${cpu}`);
    }
}