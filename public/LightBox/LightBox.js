export default class lightbox {
    static activate(){
        document.body.insertAdjacentHTML("beforeend",`
        <div class="lightbox" id="lightbox" style="display:none;">
           <div class="lightbox__inner">
              <button type="button" class="lightbox__close">
                   &time;

                   </button>
                   <div class="lightbox__content">

                   </div>
           </div>          
        </div>
        `);

const lightBox = document.querySelector("#lightbox");
const btnClose = lightBox.querySelector(".lightbox__close");
const Content = lightBox.querySelector(".lightbox__content");
const closeLightbox =() =>{
lightBox.style.display ="none"
Content.innerHTML = "";

}; 

lightBox.addEventListener("mousedown", e=>{
  // console.log(e);
    if (e.target.matches("#lightbox")){
        closeLightbox();
       }  

});

btnClose.addEventListener("click",()=>{
    closeLightbox();


}); 
    }

static show(htmlOrElement){
    const content = document.querySelector("lightbox .lightbox__content");
    document.querySelector("#lightbox").style.display = null;
    content.innerHTML = htmlOrElement;
   }
}
/*
const lightBox = document.querySelector("#lightbox");
navigator.addEventListener("mousedown", e=>{
    // console.log(e);
      if (e.target.matches("#updatelLightBox")){
          show();
         }  
}); 


//===========================================
/*function sendDesiredCustomerForReport()
{
    var stDt = document.querySelector("#custNmInpt").value;
    var endDt = document.querySelector("#custPsInpt").value;

    console.log(cs, ps);

    var myBody = {
        "customerGiven":indexedDB.customerGiven, //'20002',cs
        "customerPs":  indexedDB.customerPs //'1234567890',ps
    };

   fetch("/Customer",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody)
   })
   .then((dataFromServer)=>{
    return dataFromServer.json();
   })
   .then((dataAsObject)=>{
    console.log(dataAsObject);
    var theArr = dataAsObject;
})
}
   sendDesiredCustomerForReport()*/
//===========================================
