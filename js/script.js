//stert the script and firest toogle bar 
let toogleMenu = document.getElementById("menuToggler"), meun = document.getElementById("nav");
meun.style.height="0px";


toogleMenu.onclick =function(){
    "use strict";   
    if(meun.style.height =="0px"){
      
        meun.style.height="220px";
        console.log("done");
        toogleMenu.classList.add("active");
        
    }else{
        meun.style.height="0px";
        console.log("rwrong")
       this.classList.remove("active");
    }
  window.onclick =function(e){
      if(e.target!==toogleMenu && e.target!==meun){
          meun.style.height="0px";
           toogleMenu.classList.remove("active");
      }
  }
}
let list =document.querySelectorAll(" #nav li" );
list.forEach(li=>{
li.onclick =function(e){
    e.stopPropagation();
}
});
// this gode for get alement and transfer you the producte page---------------------------------------------
let allImg = document.querySelectorAll(" .prouduct img");
allImg.forEach(img=>{
    img.addEventListener("click" , (e )=>{
        //this is variblas
       let src =e.target.src , srcSUB = src.substr(44 ,src.length), 
           finalSrc = srcSUB , 
           imgePRO = document.getElementById("imageFromPro");
           document.getElementById("imageFromPro").setAttribute("src" ,finalSrc) ;
      //this for loop to creatre other image on the gallery 
        
       for(let i =1; i<=5 ; i++){
                let OtheSrc = srcSUB.substr(0,srcSUB.length-7 ) ,
                jpg = ".jpg" ,
                newimages =document.querySelectorAll(".new") ,
                last =`${OtheSrc}(${i})${jpg} `;
                newimages[i].src = last;       
       }
       //this is variblas our gallery content the head and imge and rating and so 
       let head =document.getElementById("headingFromPro") , 
           pric = document.getElementById("priceFromPro") , 
           phragrph = document.getElementById("textFromPro") , 
           newrate= document.querySelector(".newRating");
          
          // this section is asigment the variblas up this
         
       imgePRO.src = e.target.parentElement.children[0].getAttribute("src");
        head.textContent = e.target.parentElement.children[1].textContent;
        pric.textContent = e.target.parentElement.children[4].textContent;
       newrate.innerHTML =e.target.parentElement.children[2].innerHTML;
       phragrph.textContent = e.target.parentElement.children[3].textContent;
       ///this is function count price on the in lasr section 
        count();
    
      //location.replace("html/proudect.html");
   }) 
 let  imgeGallary = document.getElementById("imageFromPro");
});
//this last section----------------------------------------------------------------------------------------------------------
  let lineContent = document.querySelector(".store-content"),
          head =document.getElementById("headingFromPro") , 
           pric = document.getElementById("priceFromPro") , 
           pace = document.getElementById("numberOfPace") , 
           imgeGallary = document.getElementById("imageFromPro"), 
           newrate = document.querySelector(".newRating");

    
//this is add item click -------------------------------------------------------
let add = document.getElementById("addItem");
add.addEventListener("click" ,function(){
    let text = ` <div class="main-line ">
             <div class="sold first">
             <img src="${ imgeGallary.getAttribute("src")}">
                 <div class="details">
                     <h2 class="lastname">${head.textContent}</h2> 
                     <h3 class="lastprice"> price is ${pric.textContent}</h3>
                     <h6 class="remove" remove>remove</h6>    
                 </div>    
             </div>
             <div class="second unmberFromJava"> ${numberOfPace.value }</div>
             <div class="last unmberFromJavaForClac"> ${parseInt(pric.textContent.substr(this.length -1 , this.length)) * numberOfPace.value}</div>
             
             
         </div>` ,  jksa = document.createElement("div") ;
    jksa.innerHTML = text;
    lineContent.appendChild(jksa);
   
   count();
  let store =document.querySelectorAll(".main-line") ,  remove =document.querySelector(".remove");

store.forEach(str=>{
str.addEventListener("click" , (e)=>{

    if(e.target.hasAttribute("remove") ){
       str.remove()
    }
     count(); 
    countfinal();
})
})
    count();
    countfinal();
    
})


 function count(){
     var total = 0 ;

   $(".unmberFromJavaForClac").each(function(){
       total = total + parseInt($(this).text());
      $(".tatlaFromJava").text(total);
         
   
       
   })

  
}

count();
countfinal();

// this code for remove the contnt ypu will not want it ;
function countfinal(){
        var fianlTotale = 0;
$(".righttotal").each(function(){

       fianlTotale = fianlTotale + parseInt($(this).text());
      $(".tatlaFromJavaAll").text(fianlTotale);
});
}
//this is script for input custom input---------------------------------------
let input = document.querySelectorAll(".input");
input.forEach(inp=>{
    inp.addEventListener("focus" , function(){
        this.parentElement.parentElement.classList.add("focus");
        this.style.opacity=1;
    });
    inp.addEventListener("blur", function(){
        if(this.val!==""){
         this.parentElement.parentElement.classList.remove("focus");
        this.style.opacity=.01;
            console.log(this.val)
    } }  )
     
    
})

// this is flag;
$("#addItem").on("click" ,function(){
     animte();
} );



 function animte(){
     $(".install").fadeIn(200).animate({
      top : "70%" 
   },1000);
 $(".install").fadeOut(100 ,function(){
           $(".install").animate({
               top: "0"
           },400);
   });
 }



// last section the smoth scrool
$(".navigation li , .nav-icon").on(" click" ,function(){
   var scroll =$(this).data("scroll");
    $("body , html").animate({
        scrollTop: $(scroll).offset().top
    },400)
                      })
$(".prouduct img").on("click" , function(){
    $(".selection-done").fadeIn().delay(500).fadeOut();
})