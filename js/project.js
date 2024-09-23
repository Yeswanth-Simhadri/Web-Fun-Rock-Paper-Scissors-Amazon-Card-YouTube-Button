function enterKey(event){
    if(event.key==='Enter'){
    calculateShipping();
}
}
function calculateShipping(){
    let ip=Number(document.querySelector('.input-cost').value);
    if(ip<40){
        ip+=10;
    }
    document.querySelector('.final-cost').innerHTML=`$${ip}`;

}
function change(){
    const status = document.querySelector('.Subscribe-button');
    if (status.innerHTML==='Subscribe'){
        status.innerHTML='Subscribed';
        status.classList.add('subcribed-css');
    }else{
        status.innerHTML='Subscribe';
        status.classList.remove('subcribed-css');
    }
}