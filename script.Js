 const input1 = document.querySelector('.gol')
 const input2 = document.querySelector('.gol2')
 const input3 = document.querySelector('.gol3')

 const chebox1= document.querySelector('.checkboxs1')
 const chebox2= document.querySelector('.checkboxs2')
 const chebox3= document.querySelector('.checkboxs3')

 

chebox1. addEventListener('click',()=>{
console.log('chekbox1')
input1.classList.toggle('Completed')
 })
chebox2. addEventListener('click',()=>{
input2.classList.toggle('Completed')

 })
chebox3. addEventListener('click',()=>{
input3.classList.toggle('Completed')

 })
 

    
