let ismim = prompt("isminizi giriniz:")
let myName = document.getElementById("myName")
let isim = ismim.toUpperCase()

if(ismim == ""){
    alert("bu kısım boş bırakılamaz!!!")
}else{
    myName.innerHTML = isim
}

var timelement = document.querySelector('#myClock') 

function time() { 
    
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']; 
    var d = new Date(); 
    var s = d.getSeconds(); 
    var m = d.getMinutes(); 
    var h = d.getHours(); 
    var dayName = days[d.getDay()]; 
    timelement.textContent = 
    ("0" + h).substr(-2) + ":" + 
    ("0" + m).substr(-2) + ":" + 
    ("0" + s).substr(-2) + dayName;
  }
   
  
  setInterval(time, 1000); 