$(document).ready(function() {
    $('#save').click(function() {

        var password = $('#password').val();
        var email = $('#email').val();

        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");

        if (atpos < 1 || (dotpos - atpos < 2)) {
            $("#error_email").show().addClass("bounce-in-right");
            //error = " You Have To Write Valid Email Address. ";
            //document.getElementById( "error_email" ).innerHTML = error;
            $('#email').focus().css("border", "3px solid #cc0000");
            return false;
        }

        var passwordMatch = /^(?=.*\d).{6,20}$/;
        if (password.match(passwordMatch)) {

            $("#PassValid").show();
            return true;
        } else {
            $("#PassValid").show().addClass("bounce-in-right");

            $('#password').focus().css("border", "3px solid #cc0000");
            return false;
        }

    });

    $("#password").keypress(function(e) {
        $("#PassValid").hide(300);
        $('#password').focus().css("border", "3px solid #555");
    });
    $("#email").keypress(function(e) {
        $("#error_email").hide(300);
        $('#email').focus().css("border", "3px solid #555");
    });

});