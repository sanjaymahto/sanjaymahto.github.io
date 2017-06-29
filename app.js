 // main document ready function to check if dom is loaded fully or not
 jQuery(document).ready(function() {

    function sendFormData(event){

        // prevent the default behaviour of the form
        event.preventDefault();
        console.log($('form').serialize());
        $.ajax('https://api.edwisor.com/api/v1/public/send/mail/mahto.sanjay41@gmail.com',{

                type:'POST',
                data: $('form').serialize(),
                dataType: "json",
                success : function(response){
                    console.log(response);
                    //alert("Data success");
                    $('form').remove();
                    document.getElementById("mailSent").innerHTML="Thank You!";
                },
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    console.log(errorMessage);
                    document.getElementById("mailSent").innerHTML= "Thank you!";
                    document.getElementById("contact-email").innerHTML= "  ";
                    document.getElementById("contact-subject").innerHTML= "  ";
                    document.getElementById("contact-message").innerHTML= "  ";
                }
            }//end argument list 



        );// end ajax call 


    }

    $("form").on('submit',sendFormData)



  });