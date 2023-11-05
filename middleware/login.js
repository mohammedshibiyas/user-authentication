document.getElementById("submit-btn").addEventListener("click",(e)=>{
    e.preventDefault();
    let user=document.getElementById("username").value;
    let  password=document.getElementById("password").value;


    fetch("http://localhost:3008/authentication/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            user, password
        })
    })
    .then((res)=>{
        console.log(res.status);
        if(res.status==200)
        {
            alert("Login successful")
        }
        else{
            alert("login failed")
        }
    })
    .catch((error)=>{
        alert("server not connected")
    })
})