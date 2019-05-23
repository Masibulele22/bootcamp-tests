function findItemsOver20(itemList){
    var pull = [];
    for (var i=0; i<itemList.length; i++){
        if(itemList[i].qty>20){
            pull.push(itemList[i])
        }
    }
    return pull;
}
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
