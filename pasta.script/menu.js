


let button_menu=document.querySelector("#button_menu")
let menu_mob=document.querySelector("#menu")
let item_mob=document.querySelector("#items")
let barra_menu_mob=document.querySelector("#menu_mob")


 button_menu.addEventListener("click", abrir_menu)


function abrir_menu(){
    menu_mob.style.width="100%"
    button_menu.style.transform="rotateZ(360deg)"
    button_menu.src="img/fecha-menu-mob.png"
    
   

  setTimeout(() => {
      item_mob.style.display="block"
  }, 300);


  button_menu.removeEventListener("click", abrir_menu)
  button_menu.addEventListener("click",fecha_menu)

}


function fecha_menu(){

        menu_mob.style.width="0%"
        button_menu.style.transform="rotateZ(0deg)"
        button_menu.src="img/menus.png" 
        item_mob.style.display="none"
    
        button_menu.addEventListener("click", abrir_menu)
        button_menu.removeEventListener("click",fecha_menu)

}


window.addEventListener("scroll" , menu_mob_scroll)


function menu_mob_scroll(){
    if(scrol=window.pageYOffset>=30){
       barra_menu_mob.style.background="black"
    }else{
        barra_menu_mob.style.background=""
    }
}