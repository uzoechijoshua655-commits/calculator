const input=document.querySelector('input')
const ev=document.querySelector('.eval')
var clear=document.querySelector('.clear')


function calculate(val){
input.value+=val
}
clear.addEventListener('click', ()=>{
    input.value=''
})
// function evaluate(){
    // input.value=eval(input.value)
// eval(input.value)


ev.addEventListener('click', ()=>{
    const ans=eval(input.value)
    input.value=ans
    console.log(eval(input.value));
    
})