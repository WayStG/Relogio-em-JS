setInterval(() => {

    const date = new Date();
    // const dia = date.getDay()
    // const mes = date.getMonth()
    // const ano = date.getFullYear()
    const hora = date.getHours()
    const minuto = date.getMinutes()
    const segundo = date.getSeconds()

    document.getElementById("hora").innerText = hora < 10 ? `0${hora}:` : `${hora}:`;

    document.getElementById("minuto").innerText = minuto < 10 ? `0${minuto}:` : `${minuto}:`;
    
    document.getElementById("segundos").innerText = segundo < 10 ? `0${segundo}` : `${hora}`;


    }
, 1000)