


function amei_coracao(){
    let coracao=document.querySelectorAll(".fa-heart-o")
    let span_img=document.querySelectorAll(".span_img")
      
     for (let index = 0; index < coracao.length; index++) {

         coracao[index].addEventListener("click", amei)

         function amei(){
            coracao[index].style.color="red"
            setTimeout(() => {
                span_img[index].style.transform="scale(10)"
            },50);
            
            setTimeout(() => {
                span_img[index].style.transform="scale(0)"
            }, 700);
             
            coracao[index].removeEventListener("click", amei)
            coracao[index].addEventListener("click", remove_amei)
         }

         function remove_amei(){
            coracao[index].style.color=""
            coracao[index].addEventListener("click", amei)
            coracao[index].removeEventListener("click", remove_amei)


         }
         
     }
    
}

function zoom_arte(){
    
    let button_zoom=document.querySelectorAll(".fa-plus-square-o")
   
    for (let index = 0; index < button_zoom.length; index++) {
      let img_todos=document.querySelectorAll(".img_todos")
      let secao_icone=document.querySelectorAll(".secao_icone")
      let card_todos=document.querySelectorAll (".card_todos")
      let desc_todos=document.querySelectorAll(".desc_todos")
  
       
        button_zoom[index].addEventListener("click",mostra_arte)
      
      function mostra_arte(){
        
        let main_zoom=document.createElement("div")
        let button_fecha_zoom=document.createElement("button")
        let container_zoom=document.createElement("div")
        let obs=document.createElement("p")

  

         main_zoom.classList.add("main_zoom")
         container_zoom.classList.add("container_zoom")
         button_fecha_zoom.classList.add("button_fecha_zoom")
         obs.classList.add("obs")
        

        obs.innerHTML=`<strong>Obs:</strong> Todo o conteúdo visto nas artes são de exemplo, quando você(cliente)
                       escolher sua arte será adicionado o conteúdo referente ao seu negócio.<br><br>
                       <span>Sua arte é exclusiva</span> Quando você(cliente) adiquirir sua arte nós retiramos da nossa coleção,
                       você comprou a arte é sua, não venderemos mais esse modelo para nenhum outro cliente. `

         document.body.appendChild(main_zoom)
         setTimeout(() => {
          main_zoom.style.width="100%"
          main_zoom.style.height="100%"
         
         
        
         }, 100);
         

         setTimeout(() => {

          if(window.screen.width<=600){
            img_todos[index].style.width="350px"
            img_todos[index].style.height="350px"
         }else{
            img_todos[index].style.width="500px"
            img_todos[index].style.height="500px"
         }
          button_zoom[index].style.display="none" 
          container_zoom.appendChild(img_todos[index])
          main_zoom.appendChild(button_fecha_zoom)
          main_zoom.appendChild(container_zoom)
          main_zoom.appendChild(secao_icone[index])
          main_zoom.appendChild(obs)
         }, 600);
        
        

 
       
      button_fecha_zoom.addEventListener("click",()=>{
        
        img_todos[index].style.width=""
        img_todos[index].style.height=""
        button_zoom[index].style.display="inline"
        button_fecha_zoom.style.display="none"
        obs.style.display="none"
        card_todos[index].insertBefore(img_todos[index],desc_todos[index])
        card_todos[index].appendChild(secao_icone[index])

        let main_zoom_todos=document.querySelectorAll(".main_zoom")

           for (let index = 0; index < main_zoom_todos.length; index++) {
             main_zoom_todos[index].style.width="0%"
             main_zoom_todos[index].style.height="0%"
             setTimeout(() => {
              document.body.removeChild(main_zoom_todos[index])
             },1000);
             
           }
  
       
      })

    
          

        
    }

   
   

      

      }


  

}
