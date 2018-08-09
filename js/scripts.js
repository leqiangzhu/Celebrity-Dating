$(document).ready(function() {
  $("form#Identity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();


    if (age < 18){
      alert("You are too young!!")}
      else if(age > 18){

        if (gender === "male"){
          $('#Match').show();
          $('#Match1').hide();}
          else {
            $("#Match1").show();
            $('#Match').hide();}
            $

      }




    event.preventDefault();
  });
});
