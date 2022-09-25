function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function wowzers(){
        return 5;
    }
}

function returnsAnAnonymousFunction(){
    return function(){};
}