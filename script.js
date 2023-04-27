
function chars()
{
    var charLength = document.getElementById("msg").value;
    document.getElementById("msgChars").innerHTML = 150 - charLength.length + " tecken kvar";
}