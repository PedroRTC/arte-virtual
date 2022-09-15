let ofertas=[]
let container_oferta=document.querySelector("#container_oferta")



    function fetchJson(url){
       return fetch(url).then((resp)=>{
         return resp.json()
         
       })

      
      
    }

   async function chamar_oferta(){
    ofertas= await fetchJson("pasta.json/oferta.json")
      gera_oferta()

  
   }

  chamar_oferta()

 

  function gera_oferta(){
       ofertas.map((oferta)=>{
           let card_oferta=document.createElement("div")
           let button_oferta_zoom=document.createElement("button")
           let div_img_oferta=document.createElement("div")
           let li01_oferta=document.createElement("li")
           let li02_oferta=document.createElement("li")
           let button01_oferta=document.createElement("button")
           let button02_oferta=document.createElement("button")
           let pDesc_oferta=document.createElement("P")
           let pPreco_oferta=document.createElement("P")
           let img_estrela=document.createElement("img")
           let section=document.createElement("section")
          
            
            card_oferta.classList.add("card")
            button_oferta_zoom.classList.add("button_oferta_zoom")
            div_img_oferta.classList.add("div_img")
            button01_oferta.classList.add("button01_oferta")
            button02_oferta.classList.add("button02_oferta")
            
         

            pDesc_oferta.classList.add("pDesc")
            pPreco_oferta.classList.add("pPreco")
            
            img_estrela.src="../img/avaliacao.png"


           li01_oferta.style.backgroundImage=`url("${oferta.li01}")`
           li02_oferta.style.backgroundImage=`url("${oferta.li02}")`
           pDesc_oferta.textContent=oferta.desc
           pPreco_oferta.innerHTML=`<span>${oferta.precoAn}</span> por <strong>${oferta.precoAt}</strong>`
           
          
           div_img_oferta.appendChild(li01_oferta)
           div_img_oferta.appendChild(li02_oferta)
           card_oferta.appendChild(div_img_oferta)
         
           card_oferta.appendChild(button01_oferta)
           card_oferta.appendChild(button02_oferta)
           card_oferta.appendChild(pDesc_oferta)
           card_oferta.appendChild(pPreco_oferta)
           section.append(img_estrela)
           card_oferta.appendChild(section)
           card_oferta.appendChild(button_oferta_zoom)
           container_oferta.appendChild(card_oferta)


           
           button01_oferta.addEventListener("click", img_esquerda)
           button02_oferta.addEventListener("click", img_direita)


           function img_direita(){
              div_img_oferta.scrollBy(100,0)
              hr02_button.style.background="darkturquoise"
              hr01_button.style.background="white"
              button02_oferta.style.background="darkturquoise"
              button01_oferta.style.background="white"
            
    
           
         }
        
            function img_esquerda(){
              div_img_oferta.scrollBy(-100,0)
              hr01_button.style.background="darkturquoise"
              hr02_button.style.background="white"
              button02_oferta.style.background="white"
              button01_oferta.style.background="darkturquoise"
          
            
          }



       div_img_oferta.addEventListener("scroll",scrollsImg)

       function scrollsImg(){
        if(div_img_oferta.scrollLeft>=100){
         hr02_button.style.background="darkturquoise"
         hr01_button.style.background="white"
         button02_oferta.style.background="darkturquoise"
         button01_oferta.style.background="white"
        }else{
         hr01_button.style.background="darkturquoise"
         hr02_button.style.background="white"
         button02_oferta.style.background="white"
         button01_oferta.style.background="darkturquoise"
        }

       


       }
     

        
        

         if(window.screen.width>700){
          card_oferta.addEventListener("mouseover",()=>{
            button_oferta_zoom.style.opacity="1"
            button_oferta_zoom.style.marginLeft="10px"
          })
         
           card_oferta.addEventListener("mouseleave",()=>{
             button_oferta_zoom.style.opacity="0"
             button_oferta_zoom.style.marginLeft="0px"
           })
          
         }
        
        

           

        let hr01_button=document.createElement("hr")
        let hr02_button=document.createElement("hr")


            button_oferta_zoom.addEventListener("click",()=>{

            let button_fecha=document.createElement("button")
            let div_mais=document.createElement("div")
            let div_img_mais=document.createElement("div")
            let b1=document.createElement("button")
            let b2=document.createElement("button")
            let secao_button_oferta=document.createElement("section")
            let secao_rodape_oferta=document.createElement("section")
            let p_rodape_oferta=document.createElement("p")
            
            if(window.screen.width<=600){
              div_img_oferta.style.width="280px"
              div_img_oferta.style.height="280px"
            }else{
              div_img_oferta.style.width="500px"
              div_img_oferta.style.height="500px"
            }
           
            
            div_mais.classList.add("div_mais")
            div_img_mais.classList.add("div_img_oferta")
            b1.classList.add("b1")
            b2.classList.add("b2")
            button_fecha.classList.add("button_fecha")
            secao_button_oferta.classList.add("secao_button_oferta")
            hr01_button.classList.add("hr01_button")
            hr02_button.classList.add("hr02_button")
            secao_rodape_oferta.classList.add("secao_rodape_oferta")
            p_rodape_oferta.innerHTML="https://arte-virtual.netlify.app/"

             
            div_mais.append(button_fecha)
            div_img_mais.append(b1)
            div_img_mais.append(div_img_oferta)
            div_img_mais.append(b2)
            secao_button_oferta.appendChild(hr01_button)
            secao_button_oferta.appendChild(hr02_button)
            secao_rodape_oferta.appendChild(p_rodape_oferta)

            div_mais.appendChild(div_img_mais)
            div_mais.appendChild(secao_button_oferta)
            div_mais.appendChild(secao_rodape_oferta)
            document.body.appendChild(div_mais)


           b1.addEventListener("click", img_esquerda)
           b2.addEventListener("click",img_direita)
           
           hr01_button.addEventListener("click",img_esquerda)
           hr02_button.addEventListener("click",img_direita)
            

         button_fecha.addEventListener("click",()=>{
          card_oferta.insertBefore(div_img_oferta,button01_oferta)
          div_img_oferta.style.width=""
          div_img_oferta.style.height=""
          document.body.removeChild(div_mais) 
             
         })

              
        


         })

         
           
      })
      
    
     
  }