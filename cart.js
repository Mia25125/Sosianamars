let items=[]
function notification (name){
 let notdiv = document.getElementById("notification");
 notdiv.textContent=" you have added "+name+" to cart👍";
items.push(name); 
 setTimeout(hidenotification,6000);
}
function hidenotification() {
 let notdiv = document.getElementById("notification");
 notdiv.textContent="";
}
function OpenCart(){
    let number=1;
        document.getElementById("cart-content").innerHTML="";
    items.forEach(item=>{
        let html=document.createElement("p");
        html.textContent=item;
        html.style.fontSize="25px";
        document.getElementById("cart-content").appendChild(html);
    });
    document.getElementById("cart").style.display="flex";
}