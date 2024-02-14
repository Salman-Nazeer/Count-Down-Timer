function putValueHour(a) {
    var hour = document.getElementById("hours")
    // console.log(a)
    hour.innerHTML = a.value
  
  }
  
                 
  function putValueMins(a) {
    var min= document.getElementById("min")
    // console.log(a)
    min.innerHTML = a.value
  
  }
  
  
  function putValueSec(a) {
    var sec = document.getElementById("sec")
    // console.log(a)
    sec.innerHTML = a.value
  
  }
   
  var a =  document.getElementById("hours")
  var b =   document.getElementById("min")
  var c = document.getElementById("sec")
  
  
    function decrementTimer() {
  
   var a =  document.getElementById("hours")
   var b =   document.getElementById("min")
   var c = document.getElementById("sec")
  
      interval = setInterval(() => {
  
  
        c.innerHTML--;
  
        if(c.innerHTML == 0 && b.innerHTML == 0 && a.innerHTML == 0 ){
          clearInterval(interval)
        }
         
        if(b.innerHTML >0 && c.innerHTML == 0){
          c.innerHTML = 60;
          b.innerHTML--
        }
        
        if(a.innerHTML >0 && b.innerHTML == 0){
          b.innerHTML = 59;
          a.innerHTML--
        }
  
      }, 1000);
  
  
      // document.querySelectorAll(".span").forEach(element => {
      //   element.innerHTML +=  ":" 
        
      // });
  
  
      document.getElementById("start").hidden = true
      document.getElementById("stop").hidden  = false
      document.getElementById("reset").hidden  = false
  
      var x = document.getElementById("container-main")
      x.style.backgroundColor = "yellow"
      
     document.querySelectorAll(".inp").forEach(element => {
      element.hidden = true
      
     });    
    }
  
    function stopTimer() {
      clearInterval(interval)
  
      document.getElementById("start").hidden = false
      document.getElementById("stop").hidden  = true
  
      
    }
  
    function resetTimer() {
      stopTimer()
      a.innerHTML = 0
      b.innerHTML = 0
      c.innerHTML = 0
      
    }