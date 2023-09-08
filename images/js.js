console.log("rohit");
const links=document.querySelectorAll('.links');
const tabs=document.querySelectorAll('.tab-contents');
links.forEach((e,i)=>{

  e.addEventListener('click',function(e){
    
    links.forEach((element)=>{
      element.classList.remove('active-link')
    })
    tabs.forEach((el)=>{
        el.classList.remove('active-tab');
    })

    e.currentTarget.classList.add('active-link');
    console.log("id hai")
    const id=e.currentTarget.dataset.no;
    console.log(id);
    document.getElementById(id).classList.add("active-tab");


    

    
         
        

  })
})

