let cardapios=[]
let container_cardapio=document.querySelector("#container_cardapio")



    function fetchJson(url){
       return fetch(url).then((resp)=>{
         return resp.json()
         
       })

      
      
    }

   async function chamar_cardapio(){
   cardapios= await fetchJson("pasta.json/cardapio.json")
      gera_cardapio()
      zoom_arte()
      amei_coracao()
     


  
   }

  chamar_cardapio()



  function gera_cardapio(){
  
    
      cardapios.map((cardapio)=>{
          let card_todos=document.createElement("div")
          let img_todos=document.createElement("li")
          let span_img=document.createElement("span")
          let desc_todos=document.createElement("p")
          let preco_todos=document.createElement("p")
          let secao_icone=document.createElement("section")
         
         

          img_todos.style.backgroundImage=`url("${cardapio.img_todos}")`
          desc_todos.textContent=cardapio.desc
          preco_todos.textContent=`${cardapio.preco} R$`
          span_img.innerHTML=`<i class="fa fa-heart" aria-hidden="true"></i>`

          secao_icone.innerHTML=`<i class="fa fa-heart-o" aria-hidden="true"></i>
                                 <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                                 <a href="${cardapio.img_todos}" download ><i class="fa fa-download" aria-hidden="true"></i></a>`


          card_todos.classList.add("card_todos")
          img_todos.classList.add("img_todos")
          span_img.classList.add("span_img")
          desc_todos.classList.add("desc_todos")
          preco_todos.classList.add("preco_todos")
          secao_icone.classList.add("secao_icone")
         

           
          img_todos.appendChild(span_img)
          card_todos.appendChild(img_todos)
          card_todos.appendChild(desc_todos)
          card_todos.appendChild(preco_todos)
          card_todos.appendChild(secao_icone)

          container_cardapio.appendChild(card_todos)
           

       
         


      })
  }

  