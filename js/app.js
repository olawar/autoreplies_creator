var Application = function(){

    function testStart(){
        console.log("Hello! Enjoy my code and give me feedback at warzecha.ola@gmail.com");
    }

    function datepickerFeature(){
        $( "#datepicker" ).datepicker();
    }

    function formInput(){

        //choosing the reason
        $("#message-style-options").change(function(){
            $("div.final-message").addClass("no-display");
            var optionSelected = $( this ).val();

            switch(optionSelected) {
                case "business-trip": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on a business trip until <span></span> with limited access to e-mail and phone. I will respond to your message upon my return. <span>If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
                case "general-absence": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am out of the office until <span></span> with no access to e-mail. I will respond to your message upon my return. <span>If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
                case "closed-office": {
                    $("#final-result").empty().append("<p>Thank you for your message. Our office will remain closed until <span></span>. I will respond to your message upon my return. <span>If your case is urgent please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
                case "vacation": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on vacation until <span></span>. I will respond to your message upon my return. <span>If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
                case "sick-leave": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on a sick leave until <span></span>. I will respond to your message upon my return. <span>If you need immediate assistance please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
                case "maternity-leave": {
                    $("#final-result").empty().append("<p>Thank you for your message. I am on a maternity leave until <span></span>. <span>During my absence please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
                case "christmas": {
                    $("#final-result").empty().append("<p>Season's greetings!<br>Thank you for your message. I am on Christmas break until <span></span>. <span>If your case is urgent please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
            }

            //choosing return date
            $("#datepicker").change(function(){
                $("div.final-message").addClass("no-display");
                var returnDate = $(this).val();
                var spanTarget = $("div#final-result p > span:first-child");
                spanTarget.empty().append(" " + returnDate);
        });

            //adding substitute
            $("#emergency-contact-option").change(function(){
                $("div.final-message").addClass("no-display");
                if ($( this ).val() == "no") {
                    $("#emergency-contact-data").hide();
                    $("div#final-result p > span:nth-child(2)").addClass("no-display");
                }

                else {
                    $("#emergency-contact-data").show();
                    $("div#final-result p > span:nth-child(2)").removeClass("no-display");
                }
            });

            $("input[name=name]").change(function(){
                $("div.final-message").addClass("no-display");
                var subName = $(this).val();
                var spanTargetName = $("div#final-result p > span > span:first-child");
                spanTargetName.empty().append(" " + subName + " ");
            });

            $("input[name=surname]").change(function(){
                $("div.final-message").addClass("no-display");
                var subSurname = $(this).val();
                var spanTargetSurname = $("div#final-result p > span > span:nth-child(2)");
                spanTargetSurname.empty().append(" " + subSurname + " ");
            });

            $("input[name=email]").change(function(){
                $("div.final-message").addClass("no-display");
                var subEmail = $(this).val();
                var spanTargetEmail = $("div#final-result p > span > span:last-child");
                spanTargetEmail.empty().append(" " + subEmail);
            });

        });

    //}
    //
    //function generateAutoreply(){

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