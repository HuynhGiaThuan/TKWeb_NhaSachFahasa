let count=0;

const thu=document.querySelector("#value");
const bam=document.querySelectorAll(".nhan");

bam.forEach(function(nhan){
    nhan.addEventListener("click",function(e){
        const style=e.currentTarget.classList
        if(style.contains("tang"))
        {
           
            count++;
        }
        else if (style.contains("giam"))
        {
            count--;
          
           
        }
        value.textContent=count;
    })
})









  