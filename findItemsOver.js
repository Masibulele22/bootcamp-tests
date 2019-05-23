function findItemsOver(shop, threshold){
    var pull = [];
    for(var i=0; i<shop.length; i++){
        if(shop[i].qty > threshold){
            pull.push(shop[i]);
        }
    }
    return pull;
}

var shop = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
var empty = [ ];
var threshold = 20;
var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];