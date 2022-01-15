const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
let ul = document.querySelector('.ul-eur');
let ulgbp = document.querySelector('.ul-gbp');
let ulusd = document.querySelector('.ul-usd');
fetch(url)
.then(data => data.json())
.then(data1 =>{
    let container = document.querySelector('.title');
    let h1 = document.createElement('h1');
    h1.innerHTML = data1.chartName;
    container.appendChild(h1);
    console.log(data1.time);

    let li = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    li.innerHTML = `${"Descripcion:"}${" "}${data1.bpi.EUR.code}<br>${"Tarifa:"}${" "}${data1.bpi.EUR.rate}<br>${"Tasa Flotante :"}${" "}${data1.bpi.EUR.rate_float}<br>${"actualizado Reino Unido:"}${" "}${data1.time.updateduk}`;
    

    li2.innerHTML = `${"Descripcion:"}${" "}${data1.bpi.GBP.code}${"/"}${"Descripcion:"}${" "}${data1.bpi.GBP.description}<br>${"Tarifa:"}${" "}${data1.bpi.GBP.rate}<br>${"Tarifa Flotante:"}${" "}${data1.bpi.GBP.rate_float}<br>${"actualizado Reino Unido:"}${" "}${data1.time.updateduk}`;
     
    li3.innerHTML = `${"Descripcion:"}${" "}${data1.bpi.USD.code}${"/"}${data1.bpi.USD.description}<br>${"Tarifa:"}${" "}${data1.bpi.USD.rate}<br>${"Tarifa Flotante:"}${" "}${data1.bpi.USD.rate_float}<br>${"actualizado Reino Unido:"}${" "}${data1.time.updateduk}`

    ul.appendChild(li);
    ulgbp.appendChild(li2);
    ulusd.appendChild(li3);
    //ul.appendChild(li2)
})
.catch(err=>{
    alert(err)
})





//ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.ul-eur',{
    delay:900,
    origin:'top',
    distance:'60px',
    duraton:4000,
    easing:'linear'

})

sr.reveal('.p, .ul-gbp, .ul-usd',{

    delay:600,
    origin:'top',
    distance:'50px',
    duration:2500
})

