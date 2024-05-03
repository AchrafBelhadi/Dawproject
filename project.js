var name = prompt("Please enter your Name and Surname",".");
var gender = prompt("Please enter your gender","male");

if (gender == 'male')
{
    alert("Welcome, MR. " + name);

}
else if (gender == 'female')
{
    alert("Welcome, MS. " + name);

} else {
    alert("Welcome, Unknown gender ("+ gender +") " + name);
}