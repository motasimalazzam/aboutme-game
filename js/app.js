'use strict';
let UserName=prompt("what is your name");
alert("welcome "+ UserName);
alert("Now let's play, Yes-No questions will appear on your screen, and you can answer with yes/y or no/ n.");

// first question
let LoveMyMajor=prompt("Do you think I love my college major?");
LoveMyMajor=LoveMyMajor.toLowerCase();
//console.log(LoveMyMajor);
if (LoveMyMajor==='yes' || LoveMyMajor==='y') {

    alert("Certainly, I love my major. My goal during my high school education was entering the college of Mechanical engineering!");
}else if(LoveMyMajor==='no' || LoveMyMajor==='n'){
    alert("Sorry it is wrong answer. I love my major very much.");
}else{
    alert("Please this is yes-no questions so you can ONLY answer yes or no!!!");
}

// second question
let FavoriteClub=prompt("Do you think Real Madrid is my favorite club?");
FavoriteClub=FavoriteClub.toLowerCase();
//console.log(FavoriteClub);
if (FavoriteClub==='yes' || FavoriteClub==='y') {

    alert("Of course yes, in fact it is the strongest and best club in history !!");
}else if(FavoriteClub==='no' || FavoriteClub==='n'){
    alert("That makes me a little annoyed. I will not support a club less powerful and great than Real Madrid, so, sorry it is wrong answer.");
}else{
    alert("Please this is yes-no questions so you can ONLY answer yes or no!!!");
}

// third question
let LoveProgramming=prompt("Do you think I hate programming?");
LoveProgramming=LoveProgramming.toLowerCase();
//console.log(LoveProgramming);
if (LoveProgramming==='yes' || LoveProgramming==='y') {

    alert("Are you serious? If I did not love programming I would not have joined this scholarship");
}else if(LoveProgramming==='no' || LoveProgramming==='n'){
    alert("I only expected this answer. It is a correct answer. I love programming");
}else{
    alert("Please this is yes-no questions so you can ONLY answer yes or no!!!");
}

// fourth question
let PassScholarship=prompt("Do you think I can successfully pass this scholarship?");
PassScholarship=PassScholarship.toLowerCase();
//console.log(PassScholarship);
if (PassScholarship==='yes' || PassScholarship==='y') {

    alert("Thanks for your trust in me, I will do my best for this scholarship.");
}else if(PassScholarship==='no' || PassScholarship==='n'){
    alert("Well, I am not sad, and I will do my best to pass it successfully.");
}else{
    alert("Please this is yes-no questions so you can ONLY answer yes or no!!!");
}

//fifth question
let MyTall=prompt("Do you think I am tall?");
MyTall=MyTall.toLowerCase();
//console.log(MyTall);
if (MyTall==='yes' || MyTall==='y') {

    alert("Yes, I am considered tall, almost my tall is 183 cm.");
}else if(MyTall==='no' || MyTall==='n'){
    alert("Well, if we consider the length of 183 cm is short, your answer is correct");
}else{
    alert("Please this is yes-no questions so you can ONLY answer yes or no!!!");
}

alert('Thank you '+UserName+'. I hope you enjoyed this game, if you want to know more about me read the paragraph on the page, goodbye.');