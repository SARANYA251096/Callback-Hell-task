let countDown=document.getElementById("countdown");
// document.getElementById("image").style.display="none";
let count=10;
countDown.innerHTML=count--;
const myfun=()=>{
     setTimeout(()=>{
      countDown.innerHTML=count--;
      setTimeout(()=>{
        countDown.innerHTML=count--;
        setTimeout(()=>{
          countDown.innerHTML=count--;
          setTimeout(()=>{
            countDown.innerHTML=count--;
            setTimeout(()=>{
              countDown.innerHTML=count--;
              setTimeout(()=>{
                countDown.innerHTML=count--;
                setTimeout(()=>{
                  countDown.innerHTML=count--;
                  setTimeout(()=>{
                    countDown.innerHTML=count--;
                    setTimeout(()=>{
                      countDown.innerHTML=count--;
                      setTimeout(()=>{                        
                           countDown.innerHTML="Happy Independence Day";
                      },1000);
                    },1000);
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000);
        },1000)
      },1000);
    },1000);
 }
myfun();