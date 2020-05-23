window.onload = () => {
    console.log('loaded')

    

    setInterval(function () {
        let date = new Date().toLocaleTimeString();
        let clockElement = document.getElementById('clock');
        clockElement.innerHTML = date;
    }, 1000);
}