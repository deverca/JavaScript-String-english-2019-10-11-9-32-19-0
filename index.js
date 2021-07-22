// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
name= name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
sentence = sentence.replace("g","G").replace("a","A").replace("m","M");
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
money = parseInt(money.substr(1,2));
console.log(money);
