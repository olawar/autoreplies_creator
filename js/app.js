var Application = function(){

    function testStart(){
        console.log("Hello! Enjoy my code and give me feedback at warzecha.ola@gmail.com");
    }

    function datepickerFeature(){
        $( "#datepicker" ).datepicker();
    }

    function formInput(){

        //choosing the reason
        $(".message-style-options").change(function(){
            var optionSelected = $( this ).val();
            console.log(optionSelected);

            switch(optionSelected) {
                case "business-trip": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on a business trip until <span></span> with limited access to e-mail and phone. I will respond to your message upon my return. If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</p>");
                    break;
                }
                case "general-absence": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am out of the office until <span></span> with no access to e-mail. I will respond to your message upon my return. If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</p>");
                    break;
                }
                case "closed-office": {
                    $("#final-result").empty().append("<p>Thank you for your message. Our office will remain closed until <span></span>. I will respond to your message upon my return. If your case is urgent please contact <span></span> <span></span> at <span></span>.</p>");
                    break;
                }
                case "vacation": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on vacation until <span></span>. I will respond to your message upon my return. If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</p>");
                    break;
                }
                case "sick-leave": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on a sick leave until <span></span>. I will respond to your message upon my return. If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</p>");
                    break;
                }
                case "maternity-leave": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on a maternity leave until <span></span>. During my absence please contact <span></span> <span></span> at <span></span>.</p>");
                    break;
                }
                case "christmas": {
                    $("#final-result").empty().append("<p>Season's greetings!<br>Thank you for your message. I am on Christmas break until <span></span>. If your case is urgent please contact <span></span> <span></span> at <span></span>.</p>");
                    break;
                }
            }

            //choosing return date
            $("#datepicker").change(function(){
                var returnDate = $(this).val();
                var spanTarget = $("div#final-result span:first-of-type");
                spanTarget.empty().append(" " + returnDate);
        });
            //
            //$(".final-message").removeClass("no-display");

        });

    }

    function generateAutoreply(){

        $("#submit-button").on("click", function(){
            $("div.final-message").removeClass("no-display");
            return false;
        });

    }

    return {
        testStart:testStart,
        datepickerFeature:datepickerFeature,
        formInput:formInput,
        generateAutoreply:generateAutoreply
    }
};

$(function(){

    var app = new Application();
    app.testStart();
    app.datepickerFeature();
    app.formInput();
    app.generateAutoreply();

});