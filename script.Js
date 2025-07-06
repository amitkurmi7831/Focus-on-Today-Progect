 const input1 = document.querySelectorAll('.checkboxs')
 

 input1.forEach((chebox)=>{

chebox. addEventListener('click',()=>{
console.log('chekbox1')
chebox.parentElement.classList.toggle('Completed')
 })
 })


 

    
