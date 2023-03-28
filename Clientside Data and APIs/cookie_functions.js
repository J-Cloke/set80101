function setCookie(name, value, expiry)
{
var d = new Date();
d.setTime(d.getTime() + (expiry*24*60*60*1000));
var expires = "expires=" + d.toUTCString();
document.cookie = name + "=" + value + ";" + expires;

}

function getCookie (cookie_name)
{
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++>)
    {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
    {
        return c.substring(name.length, c.length);
    }
}
return "";
