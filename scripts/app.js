//inject the selectors model, and since it is asynchronous action to load it, only inside the callback perfrom your operation.
var ns = ns ||{};
require(['selectors'],function(selectorsAPI){
    selectorsAPI.execute();



    var container = $('container');
    //container.appendChild('<input type=')


var handleSelector = function(text){
alert(text);
};
ns.handleSelector = this.handleSelector;









})
