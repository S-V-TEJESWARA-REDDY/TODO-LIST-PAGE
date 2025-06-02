let input=document.getElementById("searchInput");
let cont1=document.getElementById("searchResults");
let spin=document.getElementById("spinner");
function create(dynamic){
    let {link,title,description}=dynamic;
    let cont=document.createElement("div");
    cont.classList.add("container");
    cont1.appendChild(cont);

    let head=document.createElement("a");
    head.textContent=title;
    head.href=link;
    head.classList.add("head");
    cont.appendChild(head);
    let br=document.createElement("br");
    cont.appendChild(br);
    let para1=document.createElement("a"); 
    para1.href=link;
    para1.setAttribute("target","_blank");
    cont.appendChild(para1);
    let span=document.createElement("span");
    span.textContent=link;
    span.classList.add("span");
    para1.appendChild(span);
    let para=document.createElement("p");
    para.textContent=description;
    para.classList.add("para");
    cont.appendChild(para);
}
function webd(res){
    spin.classList.toggle("d-none");
    for(let i of res){
    create(i);
    }
}
input.addEventListener("keydown",function(event){
    if(event.key==="Enter" ){
        cont1.textContent="";
        let search=input.value;
        input.value="";
        let url="https://apis.ccbp.in/wiki-search?search="+search;
        let options={
            method:"GET"
        }
        spin.classList.toggle("d-none");
        fetch(url,options)
        .then( response => response.json())
        .then(function(status){
            let {search_results}=status;
            webd(search_results);
        });
            
        
    }
})