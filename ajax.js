$(document).ready(function(){
    $('#form').on('submit', function(e){
        //Stop the form from submitting itself to the server.
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: 'email.php',
            data: $('#form').serialize(),
            success: function(){
                alert("мы с вами свяжемся");
            }
        });
    });
});