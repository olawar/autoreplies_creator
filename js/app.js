var Application = function(){

    function testStart(){
        console.log("Hello! Enjoy my code and give me feedback at warzecha.ola@gmail.com");
    }

    function datepickerFeature(){
        $( "#datepicker" ).datepicker();
    }

    function messageTemplate(){
    //this function creates basic template of the message for adding further details

        //choosing the reason - message template
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
                    $("#final-result").empty().append("<p>Season's greetings! Thank you for your message. I am on Christmas break until <span></span>. <span>If your case is urgent please contact <span></span> <span></span> at <span></span>.</span></p>");
                    break;
                }
            }
        });
    }

    function manageBehaviour(){
    //this function manages behaviour on change and keypress events to prevent visible dynamic changes in the final output

        //return date
        $("#datepicker").change(function(){
            $("div.final-message").addClass("no-display");
        });

        //substitute
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

        $("input[name=name]").keypress(function(){
            $("div.final-message").addClass("no-display");
        });

        $("input[name=surname]").keypress(function(){
            $("div.final-message").addClass("no-display");
        });

        $("input[name=email]").keypress(function(){
            $("div.final-message").addClass("no-display");
        });
    }

    function generateAutoreply(){
    //this function activates on clicking the 'submit' button and adds all the details to the previously created message template

        $("#submit-button").on("click", function(){
            $("div#final-result p > span:first-child").empty().append($("#datepicker").val());
            $("div#final-result p > span > span:first-child").empty().append($("input[name=name]").val());
            $("div#final-result p > span > span:nth-child(2)").empty().append( $("input[name=surname]").val());
            $("div#final-result p > span > span:last-child").empty().append( $("input[name=email]").val());
            $("div.final-message").removeClass("no-display");
            return false;
        });
    }

    return {
        testStart:testStart,
        datepickerFeature:datepickerFeature,
        messageTemplate:messageTemplate,
        manageBehaviour:manageBehaviour,
        generateAutoreply:generateAutoreply
    }
};

$(function(){

    var app = new Application();
    app.testStart();
    app.datepickerFeature();
    app.messageTemplate();
    app.manageBehaviour();
    app.generateAutoreply();

});