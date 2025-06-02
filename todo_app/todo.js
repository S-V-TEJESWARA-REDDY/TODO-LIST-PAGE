let ul=document.getElementById("ul-container");
let todo=getstorage();
function savebutton(){
    localStorage.setItem("todo",JSON.stringify(todo));
}
function getstorage(){
    let b=localStorage.getItem("todo");
    let c=JSON.parse(b);
    if(c==null){
        return [];
    }
    else{
        return c;
    }
}

let l=todo.length;
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("savebutton").click() ;
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "s" || event.key === "S") {
        document.getElementById("savebutton1").click() ;
    }
});
function button(){
    let input1=document.getElementById("inp");
    let para=document.getElementById("warning");
    if(input1.value===""){
        para.classList.add("warning");
        para.textContent="Field is empty enter the TASk";
        return ;
    }
        para.textContent="";
        let newtodo={
            name:input1.value,
            id:l+1,
            checked:false
        };
        todo.push(newtodo);
        todoList(input1.value,l+1);
        l=l+1;
        input1.value="";
}
function todoList(name,id1,checkedstatus){
    let check="checkBox"+id1;
    let label2="label"+id1;
    let list="list"+id1;
    let li=document.createElement("li");
        li.id=list;
        li.classList.add("d-flex","flex-row");
        ul.appendChild(li);
        let cb=document.createElement("input");
        cb.type="checkbox";
        cb.id=check;
        cb.checked=checkedstatus;
        
        cb.classList.add("checkbox");
        
        cb.onclick=function(){
            let checkbox1=document.getElementById(check);
            let labb=document.getElementById(label2);
            labb.classList.toggle("text");
            let index1=todo.findIndex(function(i){
                if(i.id===id1){
                    return true;
                }
                else{
                    return false;
                }
            });
            let todoobject=todo[index1];
            if(todoobject.checked===true){
                todoobject.checked=false;

            }
            else{
                todoobject.checked=true;
            }
        }

        li.appendChild(cb);
        let d=document.createElement("div");
        d.classList.add("para1","d-flex","flex-row");
        li.appendChild(d);
        let lab=document.createElement("label");
        lab.classList.add("label1");
        lab.id=label2;
        lab.textContent=name;
        lab.setAttribute("for",check);
        d.appendChild(lab);
        if(checkedstatus){
            lab.classList.add("text");
        }
        let d1=document.createElement("div");
        d1.classList.add("delete");
        d.appendChild(d1);
        let ic1=document.createElement("i");
        ic1.classList.add("fa-regular", "fa-trash-can","fa-sm","icon");
        ic1.onclick=function(){
            let list1=document.getElementById(list);
            ul.removeChild(list1);
            let index=todo.findIndex(function(i){
                if(i.id===id1){
                    return true;
                }
                else{
                    return false;
                }
            });
            todo.splice(index,1);

        }
        d1.appendChild(ic1);
        
    
}

for(let i of todo){
    todoList(i.name,i.id,i.checked);
}