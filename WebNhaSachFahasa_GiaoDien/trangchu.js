let count=0;

const value=document.querySelector("#value");
const bam=document.querySelectorAll(".nhan");



bam.forEach(function(nhan){
    nhan.addEventListener("click",function(e)
       {  
           const style =e .currentTarget.classList;
           if (style.contains("tang"))
           {
                   count++;
           }
           else if (style.contains("giam"))
           {
               count--;
           }
           else
           {
               count=0;
           }
           if (count > 0)
           {
               value.style.color="green";
           }
           if (count < 0)
           {
               value.style.color="red";
           }
           if (count == 0)
           {
               value.style.color="pink";
           }
           value.textContent=count;
       });
   });