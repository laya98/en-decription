
var textaera= document.getElementById("text");
var result=document.getElementById("reslut");
var select=document.getElementById("select");
textaera.addEventListener("input",()=>{
    getResult();
});
select.addEventListener("change",()=>{
 getResult();
});
function getResult(){
    if(select.value =="decript"){
      result.value=window.atob(textaera.value);
    } else
    result.value=window.btoa(textaera.value);

}