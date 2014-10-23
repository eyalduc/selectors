//define a new model called selectors which expose a single method
define('selectors', function(){

    function executeSelector(selector){
        if(!selector){
            console.log('No selector was supplied = why like this ?');
        }
        console.log($(selector));
    }

    return {
        'execute' : executeSelector
    };
})
