//arrays are a pain in the ass, they have way too many functions
//and methods that act on them and only half of those methods and
//functions make any damn sense.

var a=[];
var b=[1, 2, 3, 4,];
var c=['dick', 'hole'];
//console.log(a, b, c);
b.push(9);
//console.log(b);
var d=b.pop();
//console.log(d);

b.unshift(1);
b.unshift(-1);
//console.log(b);
var f=b.shift();
//console.log(f);

var isOdd=b.every(function(current, index, arr){//this is a loop that will go over every value in an array
  //console.log(current, index, arr);
  
  return current%2;
});
//console.log('isOdd', isOdd);


var g=['dog', 'cat', 'mouse', 'mustache', 'goat', 'bear'];
var evenLength=g.filter(function(curr, index, arr){
  return !curr.length%2;
  
});
//console.log(g, evenLength);

g.forEach(function(curr, index, arr){
//console.log(curr);
});


var indexOfMust = g.indexOf('mustache');
//console.log(indexOfMust);

var animals = g.join(' ');
//console.log(animals);
var slamina = g.reverse(' ').join(' ');
//console.log(slamina);

var junk =[2, 55, 3, 71, 112, 135, 17, 19, 23, 29];
var sqJunk = junk.map(function(curr, index, arr){
  
  return curr * curr;
  
});
//console.log(sqJunk);

var sum =junk.reduce(function(prev, curr, index, arr){
  //console.log(prev, curr, index, arr);
  
  return prev + curr;
});
//console.log(sum);

//junk.reverse();
//console.log(junk);

//var junkSlice = junk.slice(3,5);
//console.log(junkSlice);

var someJunk = [3,4,5,6,7,8].some(function(curr, index, arr){
  return curr%2;
});
//console.log('someJunk', someJunk);
var sortedJunk = junk.sort(function(a,b){
  if(a<b){
    return -1;
  }
  else if(a>b){
    return 1;
  }
  else{
    return 0;
  }
  
});
//console.log(sortedJunk);


var moreJunk = [4,5,6,7,78,9];
moreJunk.splice(1,1);
moreJunk.splice(2, 0, 77);
console.log(moreJunk);
