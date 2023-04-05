// var a = 123;
// console.log(a);
// console.log(typeof(a));

// var b = "rinzler";
// console.log(b);
// console.log(typeof(b));

// var c = 'rinzler';
// console.log(c);
// console.log(typeof(c));

// var d = true;
// console.log(d);
// console.log(typeof(d));

// var e;
// console.log(e);
// console.log(typeof(e));


// var x=9876543;
// var y="9876543";
// console.log(x==y); // data only
// console.log(x===y); // data and datatypes





// var a="rinzler";
// var b="rinzler1";

// if(a==b){
//     console.log(true);
// }

// else{
//     console.log(false);
// }



// var a;
// var b=56789;
// console.log(a && b);
// console.log(a || b);


// var x=234;
// var y;
// console.log(x && y);
// console.log(x || y);


var userAge =90;

switch(true){
    case (userAge > 18 && userAge < 80):
        console.log("DL Issued");
        break;
    case (userAge > 80):
        console.log("Overage");
        break;
    case (userAge == 18):
        console.log("LL Issued");
        break;
    case (userAge < 18):
        console.log("Underage");
        break;
    default:
        console.log();
        break;
}
