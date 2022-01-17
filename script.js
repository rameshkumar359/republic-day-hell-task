let time=10
let heading=document.querySelector(".heading")
let animation=document.querySelector(".heading1")
let g=" "

heading.innerHTML=time
setTimeout(()=>{
    heading.innerHTML=time-1
    setTimeout(()=>{
        heading.innerHTML=time-2
       setTimeout(()=>{
           heading.innerHTML=time-3
           setTimeout(()=>{
               heading.innerHTML=time-4
               setTimeout(()=>{
                   heading.innerHTML=time-5
                   setTimeout(()=>{
                       heading.innerHTML=time-6
                       setTimeout(()=>{
                           heading.innerHTML=time-7
                           setTimeout(()=>{
                               heading.innerHTML=time-8
                               setTimeout(()=>{
                                   heading.innerHTML=time-9
                                   setTimeout(()=>{
                                           heading.innerHTML=g
                                           animation.innerHTML="HAPPY REPUBLIC DAY!"
                                       },1000)
                               },1000)
                           },1000)
                       },1000)
                   },1000)
               },1000)
           },1000)
       },1000)
    },1000)
},1000)