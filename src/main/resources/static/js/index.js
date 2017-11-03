define(['jquery','knockout','bootstrap'],function($, ko, Sammy){
    return function(){
        var self = this;
        self.click=function(data,event){
            if(data === 'a'){
                location.hash="#report";
            }
            if(data === 'b'){
                location.hash="#analysis";
            }
        };
    }
});