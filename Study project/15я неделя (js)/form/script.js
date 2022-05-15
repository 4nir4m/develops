function sendform() {

   if (document.forms[0].name.value == "") {
      alert('Пожалуйста, введите Ваше имя');
      document.mailform.name.focus();
      return false
      } else{
         var r=(document.getElementById("name").value);         
         alert("Добро пожаловать, "  + r + `!`);
      }
         

   if (document.forms[0].surname.value == "") {
      alert('Пожалуйста, введите Вашу фамилию');
      document.mailform.surname.focus();
      return false
      }

   if (document.forms[0].number.value == "") {
      alert('Пожалуйста, введите Ваш номер телефона');
      document.mailform.number.focus();
      return false
      } 
   //    else if (document.forms[0].number.value >=8){
   //       alert('Номер телефона введен не верно');
   //       return false
   // } 

   if (document.forms[0].email.value == "") {
      alert('Пожалуйста, введите электронный адрес');
      document.mailform.email.focus();
      return false
      } else if(document.forms[0].email.value.indexOf("@") <1){
            alert('Электронный адрес введен не верно');
            return false
      } else if(document.forms[0].email.value.indexOf(".") <1){
         alert('Электронный адрес введен не верно');
         return false
   }  

   if (document.forms[0].psw.value == "") {
      alert('Пожалуйста, введите пароль');
      document.mailform.psw.focus();
      return false
      }

   if (document.forms[0].psw-repeat == "") {
      alert('Пожалуйста, введите пароль');
      document.mailform.psw-repeat.focus();
      return false
      }
   
   // if (document.forms[0].psw-repeat == document.forms[0].psw.value) {
   //    console.log ('пароли совпадают');
   // } else {
   //    alert('Пароли не совпадают');
   //    document.mailform.psw-repeat.focus();
   //    return false
   // }


   return true;

}


