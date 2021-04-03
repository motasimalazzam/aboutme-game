'use strict';
let score=0;
let userName=prompt('what is your name');

while (!userName) {
  alert('pleas write your name');
  userName=prompt('what is your name');
}
alert('welcome '+ userName);
alert('Now lets play, Yes-No questions will appear on your screen, and you can answer with yes/y or no/ n.');

// first question
let loveMyMajor=prompt('Do you think I love my college major?');
loveMyMajor=loveMyMajor.toLowerCase();
//console.log(LoveMyMajor);
if (loveMyMajor==='yes' || loveMyMajor==='y') {
  alert('Certainly, I love my major. My goal during my high school education was entering the college of Mechanical engineering!');
  score++;
  console.log('first',score);
}else if(loveMyMajor==='no' || loveMyMajor==='n'){
  alert('Sorry it is wrong answer. I love my major very much.');
}else{
  alert('Please this is yes-no questions so you can ONLY answer yes or no!!!');
}

// second question
let favoriteClub=prompt('Do you think Real Madrid is my favorite club?');
favoriteClub=favoriteClub.toLowerCase();
//console.log(FavoriteClub);
if (favoriteClub==='yes' || favoriteClub==='y') {
  alert('Of course yes, in fact it is the strongest and best club in history !!');
  score++;
  console.log('second',score);
}else if(favoriteClub==='no' || favoriteClub==='n'){
  alert('That makes me a little annoyed. I will not support a club less powerful and great than Real Madrid, so, sorry it is wrong answer.');
}else{
  alert('Please this is yes-no questions so you can ONLY answer yes or no!!!');
}
// third question
let loveProgramming=prompt('Do you think I hate programming?');
loveProgramming=loveProgramming.toLowerCase();
//console.log(LoveProgramming);
if (loveProgramming==='yes' || loveProgramming==='y') {
  alert('Are you serious? If I did not love programming I would not have joined this scholarship');
}else if(loveProgramming==='no' || loveProgramming==='n'){
  alert('I only expected this answer. It is a correct answer. I love programming');
  score++;
  console.log('third',score);
}else{
  alert('Please this is yes-no questions so you can ONLY answer yes or no!!!');
}

// fourth question
let passScholarship=prompt('Do you think I can successfully pass this scholarship?');
passScholarship=passScholarship.toLowerCase();
//console.log(PassScholarship);

if (passScholarship==='yes' || passScholarship==='y') {

  alert('Thanks for your trust in me, I will do my best for this scholarship.');
  score++;
  console.log('fourth',score);
}else if(passScholarship==='no' || passScholarship==='n'){
  alert('Well, I am not sad, and I will do my best to pass it successfully.');
}else{
  alert('Please this is yes-no questions so you can ONLY answer yes or no!!!');
}
//fifth question
let myTall=prompt('Do you think I am tall?');
myTall=myTall.toLowerCase();
//console.log(MyTall);
if (myTall==='yes' || myTall==='y') {

  alert('Yes, I am considered tall, almost my tall is 183 cm.');
  score++;
  console.log('fIfth',score);
}else if(myTall==='no' || myTall==='n'){
  alert('Well, if we consider the length of 183 cm is short, your answer is correct');
}else{
  alert('Please this is yes-no questions so you can ONLY answer yes or no!!!');
}

//  sixth question
let favoriteNumber=null;

for(let i=0;i<4;i++){
  favoriteNumber=prompt('Guess what is my favorite number between 1 and 10');
  favoriteNumber=parseInt(favoriteNumber);
  if (favoriteNumber === 7){
    score++;
    alert('correct answer');
    console.log('sixth',score);
    break;
  }else if(favoriteNumber > 7){
    console.log(favoriteNumber ,'>7');
    favoriteNumber=alert('too high, try agin');
  }else if(favoriteNumber < 7){
    console.log( favoriteNumber ,'<7');
    favoriteNumber=alert('too low, try agin');
  }
  if( i===3){
    alert('the correct answer is 7');
  }
}

//seventh question
let trials=0;
let correct=true;
let favoritePlayer=['ronaldo','Ronaldinho','Marcelo','Zidan'];
do { let theplayer=prompt('Who is my favorite player');
  for(let j=0; j<4; j++){
    if(theplayer===favoritePlayer[j]){
      score++;
      alert('correct answer');
      correct=false;
      j=6;
    }
  }
  trials++;
  if(!correct){
    trials=7;
  }
  if(trials===6 ){
    alert('out of attempts');
  }
}while(trials<=5);
alert(favoritePlayer+' are all corect');
alert('Thank you '+userName+'. I hope you enjoyed this game, if you want to know more about me read the paragraph on the page, goodbye.');
alert('your score: '+score+' out of 7');
