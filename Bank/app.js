var nameUser = ['Ron', 'Harry', 'Berta', 'Sara', 'Andy', 'David', 'Yurii', 'Nina', 'Hermiona', 'Mariya'];
var lastName = ['Big', 'Small', 'Young', 'Petty', 'Potter', 'Snow', 'Daddy', 'Bob', 'Junior', 'Baby'];
var people = [];
function user(arr1, arr2) {
    for (var i = 0; i < 10; i++) {
        people[i] = arr1[Math.floor(Math.random() * arr1.length)].concat(arr2[Math.floor(Math.random() * arr2.length)]);
    }
    console.log(people);
}
user(nameUser, lastName);
