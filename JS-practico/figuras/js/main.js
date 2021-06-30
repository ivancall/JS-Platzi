
function datosCuadrado(){
    lado = document.getElementById('l_cuadrado').value;
    return calcular_cuadrado(lado);
}

function calcular_cuadrado(lado){
    area = lado * lado;
    document.getElementById('a_cuadrado').value = area;   
}


function datosTriangulo(){
    base = document.getElementById('b_triangulo').value;
    altura = document.getElementById('h_triangulo').value;
    return calcular_triangulo(base, altura);
}

function calcular_triangulo(base, altura){

    area = ((base * altura)/2);
    document.getElementById('a_triangulo').value = area;   
}

function datosCirculo(){
    radio = document.getElementById('r_circulo').value;

    return calcular_circulo(radio);
}

function calcular_circulo(radio){

    pi = Math.PI;
    area = (pi * (radio * radio));
    document.getElementById('a_circulo').value = area;   
}


