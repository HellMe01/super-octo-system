

var quiz = [{
  pertanyaan : 'Which event is generally considered to be the first belligerent act of World War II?',
  jawab : ['A. Germany’s attack on Russia','B. Germany’s attack on Britain','C. Germany’s attack on Poland','D. Germany’s occupation of Austria']
},{
  pertanyaan : 'Which two countries were the first to declare war on Germany?',
  jawab : ['A. Italy and Greece','B. Britain and France','C. Norway and Denmark','D. The United States and the USSR']
},{
  pertanyaan : 'Against which country did the Soviet Union instigate an armed conflict in late 1939?',
  jawab : ['A. Finland','B. Yugoslavia','C. Czechoslovakia','D. Hungary']
},{
  pertanyaan : 'What were the first two western European countries that Germany invaded?',
  jawab : ['A. France and Belgium','B. Norway and Denmark','C. Switzerland and Liechtenstein','D. Austria and the Netherlands']
},{
  pertanyaan : 'Where was the French surrender to Germany signed?',
  jawab : ['A. In Paris','B. In Berlin','C. In a railway car','D. On a boat']
},{
  pertanyaan : 'Overall, the Battle of Britain is considered to be',
  jawab : ['A. A victory for Germany','B. A victory for neither','C. A victory for Britain','D. A minor conflict']
},{
  pertanyaan : 'What was the code name given to Germany’s plan to invade the USSR?',
  jawab : ['A. Operation Sea Lion','B. Operation Barbarossa','C. Operation Wolfenstein','D. Operation Crossbow']
},{
  pertanyaan : 'Which battle is considered to be the turning point for the war in the Pacific?',
  jawab : ['A. The Battle of the Coral Sea','B. The Battle of Guadalcanal','C. The Battle of Iwo Jima','D. The Battle of Midway']
},{
  pertanyaan : 'Which country was the site of most of the Nazi extermination camps?',
  jawab : ['A. The USSR','B. Czechoslovakia','C. Poland','D. Hungary']
},{
  pertanyaan : 'At what conference did the Allies set the terms for the Japanese surrender?',
  jawab : ['A. The Yalta Conference','B. The Casablanca Conference','C. The Tehran Conference','D. The Potsdam Conference']
}
  ];

var correctionAnns = ['The event is generally considered to be the first belligerent act of World War II is Germany’s attack on Poland', 'Two countries were the first to declare war on Germany is Britain and France',
 'Country did the Soviet Union instigate an armed conflict in late 1939 is Finland',
 'The first two western European countries that Germany invaded is Norway and Denmark','French surrender to Germany signed is In a railway car',
 'The Battle of Britain is considered to beA victory for Britain',
 'The code name given to Germany’s plan to invade the USSR is Operation Barbarossa',
 'Battle Thats considered to be the turning point for the war in the Pacific is The Battle of Midway',
 'Country was the site of most of the Nazi extermination camps is Poland',
 'Conference did the Allies set the terms for the Japanese surrender is The Potsdam Conference']


var parent = document.getElementById('parent');
var note = document.getElementById('note');
var jawaba = document.getElementsByClassName('jawab');
var true_answer = ['2','1','0','1','2','2','1','3','2','3'];
var pertanyaan1 = document.getElementById('pertanyaan');
var soal = document.getElementById('soal');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
let qurren_q= 0;
var my_score= 0;
var truee=0;

  document.addEventListener('DOMContentLoaded', function(event){
    setupQuestion();
  });

//--------function start--------

function start() {
  parent.style.display = 'block';
  var Login = document.getElementById('login');
  Login.style.display = 'none';
}


function setupQuestion(){
pertanyaan1.innerText = quiz[qurren_q]['pertanyaan'];
a.innerText = quiz[qurren_q]['jawab'][0];
b.innerText = quiz[qurren_q]['jawab'][1];
c.innerText = quiz[qurren_q]['jawab'][2];
d.innerText = quiz[qurren_q]['jawab'][3];

}
 
 function aClick(){
   a.setAttribute('id', 'dipilih');
   b.removeAttribute('id');
   c.removeAttribute('id');
   d.removeAttribute('id');
 }
 function bClick(){
   b.setAttribute('id', 'dipilih');
   a.removeAttribute('id');
   c.removeAttribute('id');
   d.removeAttribute('id');
 }
 function cClick(){
   c.setAttribute('id','dipilih');
   a.removeAttribute('id');
   b.removeAttribute('id');
   d.removeAttribute('id');
 }
 function dClick(){
   d.setAttribute('id', 'dipilih');
   b.removeAttribute('id');
   c.removeAttribute('id');
   a.removeAttribute('id');
 }
 
 /*
 function pilih1(){
   cekScor();
 }
 function cekScor(){
   var pilih = document.getElementById('dipilih').textContent; 
   if (pilih == benar1) {
     benar();
     //alert('benar');
   }else {
     salah();
   }
 }*/
function pilih1(){
   var dipilih = document.getElementById('dipilih');
   var choice = dipilih.getAttribute('data-id');
   if (choice == true_answer[qurren_q]) {
     benar();
   }else{
     salah();
   }
 }
 function benar(){
     var dipilih = document.getElementById('dipilih');
     dipilih.setAttribute('id', 'benar');
     //dipilih.style.backgroundColor = 'red';
     correct();
     next();
     my_score+=10;
     truee+=1;
 }
 function salah(){
     var dipilih = document.getElementById('dipilih');
     //dipilih.style.backgroundColor = 'yellow';
     dipilih.setAttribute('id','salah');
     correction();
     next();
 }
 function next(){
   var nextC = document.getElementById('next');
   nextC.setAttribute('onclick','nextt()');
   nextC.innerText = 'next';
 }
 function nextt(){
   qurren_q ++;
    if (qurren_q > quiz.length -1) {
      stopQuiz();
      StopIteration();
    }
   setupQuestion();
   a.removeAttribute('id');
   b.removeAttribute('id');
   c.removeAttribute('id');
   d.removeAttribute('id');
   var nextC = document.getElementById('next');
   nextC.setAttribute('onclick','pilih1()');
   nextC.innerText = 'Choose';
   note.innerText = 'Choose the correct answer by crossing A, B, C, or D and click Choose button to save the answer';
 }
 
 function correction(){
   note.innerText = correctionAnns[qurren_q];
 }
 function correct(){
   note.innerText = 'thats right';
 }
 
 function stopQuiz(){
   parent.style.display = 'none';
   var stopQ_wrap = document.getElementById('stop_quiz1');
   stopQ_wrap.style.display = 'block';
   cek_score();
 }
 
 function cek_score(){
  
var score1 = 95;
var score2 = 85;
var score3 = 75;
var score4 = 65;
var all_score = [score1, score2, score3, score4, my_score]
var diurut = [all_score.sort(function(a, b){ return b - a })]
var myName = document.getElementById('your_name').value;
var score_rank = [
  {name :'Einstein '+ score1,
},{
  name :'Newton ' + score2,
},{
  name :'al-khawarizmi ' + score3,
},{
  name :'nikola tesla ' + score4,
},{
  name : myName +' ' + my_score,
}
];

var rank1 = document.getElementById('rank1');
var rank2 = document.getElementById('rank2');
var rank3 = document.getElementById('rank3');
var rank4 = document.getElementById('rank4');
var rank5 = document.getElementById('rank5');
var parent = document.getElementById('parent');

var pertama = diurut[0][0];
var kedua = diurut[0][1];
var ketiga = diurut[0][2];
var keempat = diurut[0][3];
var kelima = diurut[0][4];
var kesatu = '1. ';
var ke_dua = '2. ';
var ke_tiga = '3. ';
var ke_empat = '4. ';
var ke_lima = '5. ';
   var stopQ_wrap = document.getElementById('stop_quiz1');
   stopQ_wrap.style.display = 'block'
    document.getElementById('score').innerHTML = my_score;
    document.getElementById('true').innerHTML = truee;
    
    
    if (my_score == pertama) {
    rank1.innerHTML =  kesatu+score_rank[4]['name'];
    rank1.classList.add('thatsMe');
    rank2.innerHTML = ke_dua+score_rank[0]['name'];
    rank3.innerHTML = ke_tiga+score_rank[1]['name'];
    rank4.innerHTML = ke_empat+score_rank[2]['name'];
    rank5.innerHTML = ke_lima+score_rank[3]['name'];
    } else if (my_score == ketiga){
    rank1.innerHTML =  kesatu+score_rank[0]['name'];
    rank2.innerHTML = ke_dua+score_rank[1]['name'];
    rank3.innerHTML = ke_tiga+score_rank[4]['name'];
    rank3.classList.add('thatsMe')
    rank4.innerHTML = ke_empat+score_rank[2]['name'];
    rank5.innerHTML = ke_lima+score_rank[3]['name'];
    }else if (my_score == keempat){
    rank1.innerHTML =  kesatu+score_rank[0]['name'];
    rank2.innerHTML = ke_dua+score_rank[1]['name'];
    rank3.innerHTML = ke_tiga+score_rank[2]['name'];
    rank4.innerHTML = ke_empat+score_rank[4]['name'];
    rank4.classList.add('thatsMe')
    rank5.innerHTML = ke_lima+score_rank[3]['name'];
    }else if (my_score <= kelima){
    rank1.innerHTML =  kesatu+score_rank[0]['name'];
    rank2.innerHTML = ke_dua+score_rank[1]['name'];
    rank3.innerHTML = ke_tiga+score_rank[2]['name'];
    rank4.innerHTML = ke_empat+score_rank[3]['name'];
    rank5.innerHTML = ke_lima+score_rank[4]['name'];
    rank5.classList.add('thatsMe')
    }
    
    if (truee <= 6) {
      document.getElementById('score').style.color = 'red';
      document.getElementById('true').style.color = 'red'
    }else{
      document.getElementById('score').style.color = 'green';
      document.getElementById('true').style.color = 'green'
    }
 }
 //-------- function cek score----//
 
 

 