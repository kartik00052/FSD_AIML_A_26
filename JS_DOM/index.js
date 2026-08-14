function Book(){
    const child =document.createElement("div");
    child.setAttribute("class","card")
    const image=document.createElement("img");
    image.setAttribute("src","https://th.bing.com/th/id/OIP.l5EiUfa6V9Ivp1dwjNoNJAHaLH?w=122&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3")
    image.setAttribute("width","380px   ");
    image.setAttribute("height","380px   ");
    

    const h2=document.createElement("h2");
    h2.innerText="Price: 500/-";
    child.appendChild(image);
    child.appendChild(h2);
}
const parent=document.getElementById("root");
parent.appendChild(Book());