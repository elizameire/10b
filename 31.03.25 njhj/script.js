function myFunction()
{
   let h1_Obj = document.getElementById("hello");
   let user_name = document.getElementById("input_name");
   let user_surname = document.getElementById("input_surname")
   let user_age = document.getElementById ("input_age");


   h1_Obj.innerText = "hello, " + user_name.value + " !";
   console.log(user_name.value);
   console.log(user_surname.value);
   console.log(user_age.value); 

  if(!user_name.value.match([A-z]/) || user_name.value=="")



   if(user_age.value == "" || user_age.value <= 0 || !user_age.)
}