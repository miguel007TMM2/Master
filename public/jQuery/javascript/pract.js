var net = [4,5,6,82,7,10, 12,1,2,90,]
var y = []

for(var i in net){
    for(var j= 0; j < net.length; j++){
        if(net[i] > net[j]){
            y.push(net[j])
        }
    }
}
const myUniqueArray = [...new Set(y), net[9]];

 console.log(myUniqueArray)