const randomcolor = function(){

    const hex = '0123456789ABCDEF';
    let color = '#';

    for( let i = 0 ; i < 6 ; i++){

    color += hex[Math.floor(Math.random() * 16)];

}
    return color;
};
let intervalId

const startChangingColor =  function(){

    function changebgc(){
    document.body.style.backgroundColor = randomcolor();
}


intervalId = setInterval(changebgc,1000);

}

const stopChangingColor = function(){
    clearInterval(intervalId);
}

document.querySelector("#Start").addEventListener('click',startChangingColor)

document.querySelector("#Stop").addEventListener('click',stopChangingColor)