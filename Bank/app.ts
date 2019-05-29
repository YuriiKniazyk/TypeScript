const nameUser: string[] = ['Ron', 'Harry', 'Berta', 'Sara', 'Andy', 'David', 'Yurii', 'Nina', 'Hermiona', 'Mariya'];
const lastName: string[] = ['Big', 'Small', 'Young', 'Petty', 'Potter', 'Snow', 'Daddy', 'Bob', 'Junior', 'Baby'];
let people: string[] = [];

function user(arr1: string[], arr2: string[]): any{
    for(let i=0; i<10; i++){
        people[i] = arr1[Math.floor(Math.random()*arr1.length)].concat(arr2[Math.floor(Math.random()*arr2.length)]);    
    }
    console.log(people);    
} 
user(nameUser,lastName);


