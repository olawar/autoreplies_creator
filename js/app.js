var Application = function(){
    function generateAutoreply(){
    }

    return {
        generateAutoreply:generateAutoreply
    }
};

$(function(){

    var app = new Application();
    app.generateAutoreply();

});