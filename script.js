/* var a = "Hello ";
window.alert (a);
b = prompt("your name")
document.write (a+'-'+b);
var person={
    person1 :{
        name1 : "Harsha",age : 44 },
        person2 : 
        {name2 :"Nitu", age :14}
    };
document.write (person.person1.age);*/
var myfriend = [["AB","RB","DB"],[1,2,3]];
var f = myfriend.toString();
console.log (f);
var family=[
    {
        B1 : "Chintu",
        B2 : "Ayush",
        S1 : "Sony"
        },
    {
        Sl1 : "Deepu",
        Sl2 : "Anu"
    }
]

var myobj = {
    set1 : ["Red","Green","Blue"],
    Set2 : [20,30,40]
}
/*var a
a = window.prompt()
/*if (a > 5) {
    document.write("Greater than 5")
} else {
    document.write("less than 5")
}*/
/*
switch (a)
{
    case '3':
    document.write("less than 5");
    break;
    case '6': 
    document.write("greater than 5");
    break;
}*/
var a = 1 ;

/*do {

    document.write (a);
    a++ ;
    
} while (a < 10);*/

for(a=1 ; a<10 ; a++){
    document.write (a);
}

var myfriends ={
    Name1 : "AB",
    Name2 : "DB",
    Name3 : "RB",
    Name4 : "HB"
}

for ( a in myfriends){
    document.write (a);
    document.write(myfriends[a]);
}

function myfun ( a , b){
    document.write ("Hello");
    document.write (a+b);
}
myfun(5,5);
