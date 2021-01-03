// JavaScript source code
function validatefname()
{
   var firstname=document.getElementById("fname").value;
   var rel=/^[a-zA-Z\s\-]{2,20}$/;
   if(rel.test(firstname) && firstname!="") 
   {
       document.getElementById("fnameprompt").style.color="green";
   	   document.getElementById("fnameprompt").innerHTML="Valid";
       
   }
   else
   {
       document.getElementById("fnameprompt").style.color="red";
   	   document.getElementById("fnameprompt").innerHTML="Please enter a valid name";
       
   }
   
}
function validatelname()
{
   var lastname=document.getElementById("lname").value;
   var rel=/^[a-zA-Z\s\-]{1,20}$/;
   if(rel.test(lastname))
   {
       document.getElementById("lnameprompt").style.color="green";
   	   document.getElementById("lnameprompt").innerHTML="Valid";
      
   }
   else
   {
       document.getElementById("lnameprompt").style.color="red";
   	   document.getElementById("lnameprompt").innerHTML="Please enter a valid name";
      
   }
   
}
function validateUname()
{
   var Username=document.getElementById("Uname").value;
   var rel=/^[a-zA-Z\s\-]{1,20}$/;
   if(rel.test(Username))
   {
       document.getElementById("Unameprompt").style.color="green";
   	   document.getElementById("Unameprompt").innerHTML="Valid";
      
   }
   else
   {
       document.getElementById("Unameprompt").style.color="red";
   	   document.getElementById("Unameprompt").innerHTML="Please enter a valid user name";
      
   }
   
}
var password;
function validatepassword()
{
   password=document.getElementById("passw").value;
   var rel=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   if(rel.test(password))
   {
       document.getElementById("passwordprompt").style.color="green";
   	   document.getElementById("passwordprompt").innerHTML="Valid";
      
   }
   else
   {
       document.getElementById("passwordprompt").style.color="red";
   	   document.getElementById("passwordprompt").innerHTML="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
      
   }
   
}
function validatecpassword()
{
   var cpassword=document.getElementById("cpassw").value;
   if(cpassword==password)
   {
       document.getElementById("cpasswordprompt").style.color="green";
   	   document.getElementById("cpasswordprompt").innerHTML="Valid";
      
   }
   else
   {
       document.getElementById("cpasswordprompt").style.color="red";
   	   document.getElementById("cpasswordprompt").innerHTML="Password Mismatch";
      
   }
   
}








