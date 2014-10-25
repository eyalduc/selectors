//inject the selectors model, and since it is asynchronous action to load it, only inside the callback perfrom your operation.
var ns = ns ||{};
require(['selectors'],function(selectorsAPI){
    selectorsAPI.execute();

    var container = $('container');

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
           // relatedResult = relatedResult.replace(\\)
            if(relatedResult === selector){//check if challenge is solved
                var selectedItems = eval(selector);
                for(var k=0; k<selectedItems.length; k++){
                    $(selectedItems[k]).addClass("found");
                    setTimeout(function () {
                        $(this).removeClass("found");
                    }.bind(selectedItems), (k+1)*1000);
                }

                alert(eval(selector).length);
                checkboxes[i].disabled = true;
                $(liParent).addClass('challengeCompleted');
                $(checkboxes[i]).parent().parent().next().next().removeClass('hidden')
            }
        }
    }

   if(!relatedResult){
       alert('you must select the desired checkbox for your answer');
   }
}
    ns.handleSelector = handleSelector;
    //the inner method do not being parsed to string so this is helpless for an object passing...TODO (anyhow it is not a nice idea and should be used for regular values)
    //localStorage.setItem('ns', JSON.stringify(ns));



})
