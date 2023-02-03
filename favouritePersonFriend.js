function totalFriends(friends) {
    let friendsArray = Object.entries(friends);
    var sum = 0;
    for (let i = 0; i < friendsArray.length; i++) {
        sum++;
    }
    return sum;
}
function largeName(friends) {
    let max = 0;
    maxName = 0;
    for (var friendsName in friends) {
        let names = friends[friendsName];
        let sum = 0;
        for (var name in names) {
            sum++;
        }
        if (sum > max) {
            max = sum;
            maxName = names;
        }
    }
    return {max, maxName};
}

let friends = {
 
    friend1: 'Kamal Ahmed',
    friend2: 'Jamal Miah',
    friend3: 'Damal Bhuiyan',
    friend4: 'Jalal Karim',
    friend5: 'Halal Talukdar',
    friend6: 'Malamal',
    friend7: 'Alam Khondokar',
    friend8: 'Jalil Miazi Miah'
};

let maxFriends = largeName(friends);
console.log("The large name of my favorite person friendlist is '%s' with %d charecter", maxFriends.maxName, maxFriends.max);
// console.log("My favourite person have %d friends", totalFriends(friends));