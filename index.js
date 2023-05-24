function validate()
{
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value
    if (user == "admin"&& pass == "123")
    {
        window.location.assign("index.html");
        alert("login succesfully");
    }
    else
    {
        alert("login failed");
        window.location.assign("login.html");

    }
}