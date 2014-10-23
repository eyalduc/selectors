//inject the selectors model, and since it is asynchronous action to load it, only inside the callback perfrom your operation.
var ns = ns ||{};
require(['selectors'],function(selectorsAPI){
    selectorsAPI.execute();



    var container = $('container');
    //container.appendChild('<input type=')


var handleSelector = function(text){
    var selector = $('#userSelector').val();

    console.log(eval(selector)); //Dangerous and slow - eval is not to be used !!!

    //using a function
    //var func = new Function(selector);
    //console.log(func());


    //var theInstructions = "alert('Hello World'); var x = 100";
    //
    //var F=new Function (theInstructions);
    //
    //return(F());
}

ns.handleSelector = handleSelector;









})
