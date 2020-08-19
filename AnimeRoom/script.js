function filterstr() { 
    let input = document.getElementById('filter').value ;
    input=input.toLowerCase(); 
    let x= document.querySelectorAll('.animedisc');
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentNode.style.display="none"; 
        } 
        else { 
            x[i].parentNode.style.display="";                  
        } 
    } 
} 	
function showCat(text)
{
let y = text.getAttribute('anime-type');
    y=y.toLowerCase(); 
    let x= document.querySelectorAll('.animedisc');
    if(y !=='all'){
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(y)) {
            x[i].parentNode.style.display="none"; 
        } 
        else { 
            x[i].parentNode.style.display="";                  
        } 
    } }
    else{
    	for (i = 0; i < x.length; i++) { 
    		 x[i].parentNode.style.display=""; }
    }
}