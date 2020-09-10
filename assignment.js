/*---feetToMile Function---*/
function feetToMile(feet){
    const mile = feet / 5280;
    return mile;
}
//Output feetToMile Function
const nanarBarirDurotto = feetToMile(10560);
console.log(nanarBarirDurotto);

/*---woodCalculator Function---*/
function woodCalculator(chair, table, bed){
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    return chair + table + bed;
}
//Output woodCalculator Function
var woodLagbe = woodCalculator(3, 5, 2);
console.log(woodLagbe);

/*---brickCalculator Function---*/
function brickCalculator(floor){
    var totalBrick;
    if(floor <= 10){
        totalBrick = floor * 15 * 1000;
        return floor;
    }
    else if(floor <= 20){
        totalBrick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
        return floor;
    }
    else{
        totalBrick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);
        return floor;
    } 
}
//Output brickCalculator Function
var brickLagbe = brickCalculator(40);
console.log(brickLagbe);

/*---tinyFriend Function---*/
function tinyFriend(friend){
    if(friend.length == 0){
        return "Empty Array"
    }
    else{
        tiny = friend[0];
        for(var i=1; i<friend.length; i++){
            if(friend[i].length < tiny.length){
                tiny = friend[i];
            }
        }
        return tiny;
    }
}
 

