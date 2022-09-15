
let button_comentario_esquerda=document.querySelector(".button_comentario_esquerda")
let button_comentario_direita=document.querySelector(".button_comentario_direita")
let items_comentario=document.querySelector("#items_comentario")

let form_comentario=document.querySelector("#form_comentario")
let load_comentario=document.querySelector("#load_comentario")
let p_load_comentario=document.querySelector("#p_load_comentario")
let spinner_comentario=document.querySelector("#spinner_comentario")




    button_comentario_direita.addEventListener("click",()=>{
        items_comentario.scrollBy(+300,0)
    })

   button_comentario_esquerda.addEventListener("click",()=>{
       items_comentario.scrollBy(-300,0)
   })

 
   

   form_comentario.addEventListener("submit", submit_form_comentario)

   function submit_form_comentario(evt){
        evt.preventDefault()
        load_comentario.style.display="flex"
        setTimeout(() => {
           p_load_comentario.textContent="Enviado com sucesso"
           p_load_comentario.style.color="darkcyan"
           spinner_comentario.style.color="darkcyan"
        },3000);
        setTimeout(() => {
           form_comentario.submit()
        }, 5000);
   
   }