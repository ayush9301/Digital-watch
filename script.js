const clock = document.getElementById("clock");
const body = document.getElementById("body");
const btn = document.getElementById("btn");
console.log(clock);

setInterval(() => {
  let time = new Date().toLocaleTimeString();
  clock.textContent = time;
}, 500);

let num = 1;

function themchange() {

     if (num==1){
        body.style.backgroundColor="black"
    
        clock.style.backgroundColor = "white";
        clock.style.color = "black";
        btn.style.backgroundColor="white"
       btn.style.color="black"
        num = 0;
        
      }    


      else if (num == 0) {
    body.style.backgroundColor="white"
    clock.style.backgroundColor = "black";
    clock.style.color = "white";
     btn.style.backgroundColor="black"
     btn.style.color="white"

    num = 1;
  }

}

btn.addEventListener("click", themchange);

// themchange()
