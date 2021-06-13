var login=document.getElementById('login');
var signup=document.getElementById('signup');
var logout=document.getElementById('logout');
var loginbtn=document.getElementById('loginbtn');

signup.style.display="none";
logout.style.display="none";

function close(){
    signup.style.display="none";
    login.style.display="none";
    logout.style.display="block";
}

function show(){
    signup.style.display="none";
    login.style.display="block";
    logout.style.display="none";
}

function closelogin(){

}

function showlogin(){
login.style.display="block";
signup.style.display="none";
}

function showsignup(){
    signup.style.display="block";
    login.style.display="none";
}


function getallrest()
{
    const parent=document.getElementById("allrest")

    const xhr=new XMLHttpRequest();

    xhr.onreadystatechange=function (){
        if(this.readyState==4&&this.status==200)
        {
            const list=JSON.parse(this.responseText);

            for(let i=0;i<list.length;i++)
            {
                parent.appendChild(addingrest(list[i]));
            }
        }
    }
    xhr.open("GET","http://localhost:8080/allrestraunts",true);
    xhr.send();
}

function addingrest(data)
{
    const main_div=document.createElement("div");

    let  r_heading=document.createElement("h3");
    let text=document.createTextNode(data.name);
    r_heading.appendChild(text);
    main_div.appendChild(r_heading);

      r_heading=document.createElement("h5");
     text=document.createTextNode(data.tagline);
    r_heading.appendChild(text);
    main_div.appendChild(r_heading);

    r_heading=document.createElement("p");
    text=document.createTextNode(data.address);
    r_heading.appendChild(text);
    main_div.appendChild(r_heading);

    r_heading=document.createElement("button");
    text=document.createTextNode("More");

    r_heading.appendChild(text);
    r_heading.setAttribute("value",data.id);
    r_heading.setAttribute("onclick","gettherest(this)");
    main_div.appendChild(r_heading);

return main_div;


}

function gettherest(e)
{
    sessionStorage.setItem("rid",e.value);
    window.location="./html/showmenu.html"
}