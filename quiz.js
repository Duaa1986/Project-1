
const questions = [
["How many days makes a week ?","10 days","14 days","5 days","7 days", 4],
 ["How many hours can be found in a day ?","30 hours", "38 hours","48 hours", "24 hours",
 4],
 [ "How many permanent teeth does a dog have ?","38","42","40","36",4],
 ["How many sides does an hexagon have ?","Six","Sevene","Four","Five",1],
["How many hearts does an Octopus have ?","One","Two","Three","Four",3]
]


const quiz=document.getElementById("quiz");
let ques= document.getElementById("question");
let opt1=document.getElementById("option1");
let opt2=document.getElementById("option2");
let opt3=document.getElementById("option3");
let opt4=document.getElementById("option4");


let radioOpt1=document.querySelector(".option11");
let radioOpt2=document.querySelector(".option22");
let radioOpt3=document.querySelector(".option33");
let radioOpt4=document.querySelector(".option44");


const again = document.querySelector(".again")
const qCount = document.querySelector('.qCount')

let res=document.getElementById("result");
const nextbutton= document.getElementById("next");
const q=document.getElementById('quit');

let tques=questions.length;
let score=0;
let quesindex=0;
let avg; 
let count = 1;




showQuesion = (quesindex) =>
{
	ques.textContent=questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];

	radioOpt1.value=questions[quesindex][1];
	radioOpt2.value=questions[quesindex][2];
	radioOpt3.value=questions[quesindex][3];
	radioOpt4.value=questions[quesindex][4];
	
	
	qCount.textContent = count
	
	 return; 
};
showQuesion(0);
 nextques = () =>
{
	let selected_ans= document.querySelector('input[type=radio]:checked');
	
	count++;
	qCount.textContent = count;

	if(!selected_ans)
		{alert("SELECT AN OPTION");return;}

	
		if(questions[quesindex].indexOf(selected_ans.value) === questions[quesindex][5])
		{score++;}
	selected_ans.checked=false;
	     quesindex++;
	     if(quesindex===tques-1)
	     	nextbutton.textContent="Finish";
	     avg =score/tques;
	     if(quesindex===tques)
	     {
	     q.style.display='none';
          quiz.style.display='none';


		  qCount.style.display='none';
		  
		  
          result.style.display='block';
		  again.style.display='block';
		
		  result.textContent="SCORED:"+(avg*100).toFixed(2)+"%";
            return;
	     }
         showQuesion(quesindex);

}


again.addEventListener('click', () => {
	window.location.assign('./quiz1.html')
})



quit =() =>
{         
	      quiz.style.display='none';
          result.style.display='';
		  again.style.display='block';
		  qCount.style.display='none';
          let avg =score/tques;
          result.textContent="SCORE ="+avg*100;
          q.style.display="none";
		  
}