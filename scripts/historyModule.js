/**
 * Created by Eyal Duchovny on 25/10/2014.
 * Define a new module to handle back navigation in cases history contains additional navigation and cases where it is not, as in direct navigation to the answer.html.
 */
define("historyModule", function(){


    var handleBack = function(){

        if( window.history.length == 1){
            return false;
        }
        window.history.back()
    }


    return {
        'goBack': handleBack
    };

})