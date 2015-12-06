var Application = function(){

    function testStart(){
        console.log("Hello! Enjoy my code and give me feedback at warzecha.ola@gmail.com");
    }

    function datepickerFeature(){
        $( "#datepicker" ).datepicker();
    }

    function formInput(){
        $(".message-style-options").change(function(){
            var optionSelected = $( this ).val();
            console.log(optionSelected);

            switch(optionSelected) {
                case "business-trip": {
                    $("#final-result").append("Thank you for your message. I am on a business trip until <span></span> with limited access to e-mail and phone. I will respond to your message                    upon my return. If you need immediate assistance please contact <span></span> <span></span> at <span></span>.");
                    break;
                }
                case "general-absence": {
                    $("#final-result").append("Thank you for your message. I am out of the office until <span></span> with no access to e-mail. I will respond to your message upon my return.                    If you need immediate assistance please contact <span></span> <span></span> at <span></span>.")
                    break;
                }
                case "closed-office": {
                    $("#final-result").append("Thank you for your message. Our office will remain closed until <span></span>. I will respond to your message upon my return. If your case is                      urgent please contact <span></span> <span></span> at <span></span>.")
                    break;
                }
                case "vacation": {
                    $("#final-result").append("Thank you for your message. I am on vacation until <span></span>. I will respond to your message upon my return. If you need immediate                             assistance please contact <span></span> <span></span> at <span></span>.");
                    break;
                }
                case "sick-leave": {
                    $("#final-result").append("Thank you for your message. I am on a sick leave until <span></span>. I will respond to your message upon my return. If you need immediate                             assistance please contact <span></span> <span></span> at <span></span>.");
                    break;
                }
                case "maternity-leave": {
                    $("#final-result").append("Thank you for your message. I am on a maternity leave until <span></span>. During my absence please contact <span></span> <span></span> at                         <span></span>.");
                    break;
                }
                case "christmas": {
                    $("#final-result").append("Season's greetings!<br>Thank you for your message. I am on Christmas break until <span></span>. If your case is urgent please contact                            <span></span> <span></span> at <span></span>.");
                    break;
                }
            }
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