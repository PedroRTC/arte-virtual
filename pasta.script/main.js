
let img_cabe=document.querySelectorAll("#img-cabe")
let items=document.querySelectorAll("#items a")
let menu=document.querySelector("#menu")
let tema=document.querySelector("#tema")
let div_fale_conosco=document.querySelector("#div_fale_conosco")
let arte_virtul_rodape=document.querySelectorAll("#arte_virtul_rodape a")



function efeito_menu(){
    for (const int of items) {

        int.addEventListener("click", ()=>{
            int.classList.add("class","select")
             int.addEventListener("click", desmarca(int))
        })       
    }
}
   
efeito_menu()
       
      
function desmarca(int){

    let li=document.querySelectorAll("#items a")
    console.log(int)
    console.log(li)
    
    if(li){
       for (const l of li) {
           l.classList.remove("class","select")
           int.classList.add("class","select")
       }
    }
       
    }

    window.addEventListener("scroll", menuScrol)

    function  menuScrol(){

    
      if(window.screen.width > 700){
       

      if(scrol=window.pageYOffset>=30){
           menu.style.background="#333"
            
      }else{
        menu.style.background=""
      }


    }else{
     
        menu.style.background="black"
    }

    }
         menuScrol()

 for (let index = 0; index < items.length; index++) {
      items[index].addEventListener("click",efeito_loading)
      arte_virtul_rodape[index].addEventListener("click",efeito_loading)
   
 }
   
         
       
    



function efeito_loading(){


    let div_loading=document.createElement("div")
    let loading=document.createElement("div")
    let p_loading=document.createElement("p")

if(window.screen.width <=700){
    fecha_menu()
    item_mob.style.display="none"
}
   
   
    p_loading.classList.add("class","p_loading")
    div_loading.classList.add("class","div_loading")
    loading.classList.add("class","loading")
    p_loading.textContent="Arte Virtual"

    div_loading.appendChild(loading)
    div_loading.appendChild(p_loading)
    document.body.appendChild(div_loading)

     if(document.body.style.background=="black"){
            div_loading.style.background="black"
            div_loading.style.boxShadow="0px 0px 0px 700px black"
            
  }else{
    div_loading.style.background="white"
    div_loading.style.boxShadow="0px 0px 0px 700px white"
  }
           

  setTimeout(() => {
    window.scroll(0,0) 
  },1000);
    setTimeout(() => {
        document.body.removeChild(div_loading)
    }, 5000);
   
  
 

}

tema.addEventListener("click",tema_escuro)

function tema_escuro(){
    let button_tema=document.querySelector("#b_tema")
    button_tema.style.marginLeft="26px"
    document.body.style.background="black"
   setTimeout(() => {
    button_tema.classList.remove("fa-moon-o")
    button_tema.classList.add("fa-sun-o")
   }, 300);

    tema.removeEventListener("click",tema_escuro)
    tema.addEventListener("click",tema_claro)
   
}



function tema_claro(){
    let button_tema=document.querySelector("#b_tema")
    button_tema.style.marginLeft="0px"
    document.body.style.background="white"

    setTimeout(() => {
      button_tema.classList.add("fa-moon-o")
      button_tema.classList.remove("fa-sun-o")
     }, 300);

    tema.removeEventListener("click",tema_claro)
    tema.addEventListener("click",tema_escuro)
}




