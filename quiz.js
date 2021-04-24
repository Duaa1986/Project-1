let q1 = "How many days makes a week ?"
let q2 = "How manay hours can be found in a day ?"
let q3 = "How many permanent teeth does a dog have ?"
let q4 = "How many sides does an hexagon have ?"
let q5 = "How many hearts does an Octopus have ?"

const arrayQ = [{
    q1: "How many days makes a week ?",
    A: "10 days",
    B: "14 days",
    C: "5 days",
    D: "7 days",
    correctOption: "D"
},
{
    q2: "How manay hours can be found in a day ?",
    A: "30 hours",
    B: "38 hours",
    C: "48 hours",
    D: "24 hours",
    correctOption: "D"
},

    {
        q3: "How many permanent teeth does a dog have ?",
        A: "38",
        B: "42",
        C: "40",
        D: "36",
        correctOption: "B"
    },
    {
        q4: "How many sides does an hexagon have ?",
        A: "Six",
        B: "Sevene",
        C: "Four",
        D: "Five",
        correctOption: "A"
    },
    
    {
        q5: "How many hearts does an Octopus have ?",
        A: "One",
        B: "Two",
        C: "Three",
        D: "Four",
        correctOption: "C"
    },

]
   

let questionCount = 0;

const showQuestion = () => {
   const questionlist = arrayQ[questionCount]
   question.innerHTML = arrayQ.question
   question.innerHTML = questionlist.question
   optionA.innerHTML =questionlist.A;
   optionB.innerHTML =questionlist.B;
   optionC.innerHTML =questionlist.C;
   optionD.innerHTML =questionlist.D;
}
showQuestion();