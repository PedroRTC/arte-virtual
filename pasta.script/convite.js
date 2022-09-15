let convites=[]
let container_convite=document.querySelector("#container_convite")



    function fetchJson(url){
       return fetch(url).then((resp)=>{
         return resp.json()
         
       })

      
      
    }

   async function chamar_convite(){
   convites= await fetchJson("pasta.json/convite.json")
      gera_convite()
      zoom_arte()
      amei_coracao()
     

   }

  chamar_convite()



  function gera_convite(){
  
    
      convites.map((convite)=>{
          let card_todos=document.createElement("div")
          let img_todos=document.createElement("li")
          let span_img=document.createElement("span")
          let desc_todos=document.createElement("p")
          let preco_todos=document.createElement("p")
          let secao_icone=document.createElement("section")
         
         

          img_todos.style.backgroundImage=`url("${convite.img_todos}")`
          desc_todos.textContent=convite.desc
          preco_todos.textContent=`${convite.preco} R$`
          span_img.innerHTML=`<i class="fa fa-heart" aria-hidden="true"></i>`

          secao_icone.innerHTML=`<i class="fa fa-heart-o" aria-hidden="true"></i>
                                 <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                                 <a href="${convite.img_todos}" download><i class="fa fa-download" aria-hidden="true"></i></a>`


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

          container_convite.appendChild(card_todos)
           

       
         


      })
  }

  