/**
 * Created by Eyal Duchovny on 25/10/2014.
 */
var ns = ns || {};

require(['historyModule'],function(historyAPI){
    ns.goBack = historyAPI.goBack;
})