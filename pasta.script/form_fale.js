

let button__fale=document.querySelector("#button__fale")
let button_fecha_fale=document.querySelector("#button_fecha_fale")

let main_form_fale=document.querySelector("#main_form_fale")
let container_form_fale=document.querySelector("#container_form_fale")
let button_rodape=document.querySelector("#button_rodape")

let form_fale=document.querySelector("#form_fale")
let load_fale=document.querySelector("#load_fale")
let p_load_fale=document.querySelector("#p_load_fale")
let spinner=document.querySelector(".fa-spinner")



button_rodape.addEventListener("click",chamar_form)
button__fale.addEventListener("click",chamar_form)
button_fecha_fale.addEventListener("click", fechar_form)

function chamar_form(){
    main_form_fale.style.display="inline"
   setTimeout(() => {
       container_form_fale.style.top="0%"
   },100);

   setTimeout(() => {
    main_form_fale.style. backdropFilter="blur(10px)"
   },1000);
}


function fechar_form(){
    container_form_fale.style.top="-100%"
    setTimeout(() => {
        main_form_fale.style. backdropFilter="blur(0px)"
    }, 500);

   setTimeout(() => {
    main_form_fale.style.display="none"
   }, 1000);
}


form_fale.addEventListener("submit", submit_form_fale)

function submit_form_fale(evt){
     evt.preventDefault()
     load_fale.style.display="flex"
     setTimeout(() => {
        p_load_fale.textContent="Enviado com sucesso"
        p_load_fale.style.color="darkcyan"
        spinner.style.color="darkcyan"
     },3000);
     setTimeout(() => {
        form_fale.submit()
     }, 5000);

}