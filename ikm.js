function semak()
{
    var username = $("#username").val();
    var password = $("#password").val();

    if(username == "" || password == "")
    {
        alert("Please fill in username and password");
        return false;
    }

    if(username == "thanaa" && password == "1234")
    {
        alert("Login Successful");
        return true;
    }
    else
    {
        alert("Wrong username or password");
        return false;
    }
}