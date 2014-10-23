//inject the selectors model, and since it is asynchronous action to load it, only inside the callback perfrom your operation.
var ns = ns ||{};
require(['selectors'],function(selectorsAPI){
    selectorsAPI.execute();



    var container = $('container');
    //container.appendChild('<input type=')


var handleSelector = function(text){
    var relatedResult = "";
    var checkboxes = $('.checkbox');
    var selector = $('#userSelector').val();
    if(!selector){
        alert('Please input your answer!');
    }
    for(var i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked && !checkboxes[i].disabled){
            //not so nice
            var liParent = checkboxes[i].parentElement.parentElement.parentElement;
            relatedResult = liParent.getAttribute('data-result');

            if(relatedResult === selector){//check if challenge is solved
                checkboxes[i].disabled = true;
                $(liParent).addClass('challengeCompleted');
                $(checkboxes[i]).parent().parent().next().next().removeClass('hidden')
            }
        }
    }


   if(!relatedResult){
       alert('you must select the desired checkbox for your answer');
   }


  //  var selector = $('#userSelector').val();

  //  console.log(eval(selector)); //Dangerous and slow - eval is not to be used !!!

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
