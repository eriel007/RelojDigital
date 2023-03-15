console.log("perros")
function mostrarReloj(){
    let fecha=new Date();
    let hora=formato(fecha.getHours());
    let minuto=formato(fecha.getMinutes());
    let segundos=formato(fecha.getSeconds());
    document.getElementById('hora').innerHTML=`${hora}:${minuto}:${segundos}`;

    const meses=['Ene','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dias=['Dom','Lun','Mar','Mier','Juev','Vier','Sab'];
    let diaSemana=dias[fecha.getDay()];
    let dia=fecha.getDate();
    let mes=meses[fecha.getMonth()];
    let fechaTexto=`${diaSemana} ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML=fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
    
}
function formato(hora){
    if (hora < 10) {
        hora='0'+hora;
    }
    return hora;
}
/*manda a llamar a un metodo automaticamente a cada rato*/
setInterval(mostrarReloj,1000);