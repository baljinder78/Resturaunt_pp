const form=document.getElementById("menu_form");

form.addEventListener("submit",addmenu)

function addmenu(e)
{
    e.preventDefault();

    const xhr=new XMLHttpRequest();
    const menuname=document.getElementById("i_name").value;
    const menuprice=document.getElementById("i_price").value;

    xhr.onreadystatechange=function (){
        if(this.readyState==4&&this.status==200)
        {
            if(this.responseText==="false")
            {
                alert("menu not added");
            }
            else {
                window.location="../html/showmenu.html"
            }
        }
    }
    xhr.open("POST","http://localhost:8080/menu/create",true);
    const data={
        "iteamName":menuname,
        "price":menuprice,
        "restraunt":sessionStorage.getItem("rid")
    }
    xhr.send(JSON.stringify(data));
}