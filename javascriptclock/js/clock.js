let isim = prompt("İsminiz ?")

let paragraf = document.querySelector("#myName")

paragraf.innerHTML = isim

function showTime() {

    let myClock = document.querySelector("#myClock"); 
    let now = new Date(); 
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let time = `${hour}:${minute}:${second}`; 
    myClock.innerHTML = time 
    setTimeout(showTime, 1000); 

}
 showTime();
