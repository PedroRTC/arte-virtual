let logos=[]
let container_logo=document.querySelector("#container_logo")



    function fetchJson(url){
       return fetch(url).then((resp)=>{
         return resp.json()
         
       })

      
      
    }

   async function chamar_logo(){
   logos= await fetchJson("pasta.json/logo.json")
      gera_logo()
      amei_coracao()
      zoom_arte()
    

  
   }

  chamar_logo()



  function gera_logo(){
  
    
      logos.map((logo)=>{
          let card_todos=document.createElement("div")
          let img_todos=document.createElement("li")
          let span_img=document.createElement("span")
          let desc_todos=document.createElement("p")
          let preco_todos=document.createElement("p")
          let secao_icone=document.createElement("section")
         
         

          img_todos.style.backgroundImage=`url("${logo.img_todos}")`
          desc_todos.textContent=logo.desc
          preco_todos.textContent=`${logo.preco} R$`
          span_img.innerHTML=`<i class="fa fa-heart" aria-hidden="true"></i>`

          secao_icone.innerHTML=`<i class="fa fa-heart-o" aria-hidden="true"></i>
                                 <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                                 <a href="${logo.img_todos}"  download ><i class="fa fa-download" aria-hidden="true"></i></a>`


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

          container_logo.appendChild(card_todos)
           

       
         


      })
  }


  