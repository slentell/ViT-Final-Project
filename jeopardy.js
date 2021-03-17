var test = {
  
  q1:{
    question: "What does HTML mean?",
    answerList:["Hyper Links and Text Markup Language" , "House Tool Markup Language" , "Hyper Text Markup Language"],
    correctAnswer:"Hyper Text Markup Language"
    
  },
  q2:{
        question:"What tag is used to create a paragraph?",
        answerList:["< p >" , "<para>" , "<paragraph>"],
        correctAnswer: "< p >"
  },
  q3:{
    question: "What is the tag < br> used for?",
    answerList:["page break" , "line break" , "break through"],
    correctAnswer: " line break "
  },
  q4:{
    question: "What tag is used to create the largest heading?",
    answerList:["< h1 >" , "<head>" , "< h6 >" ],
    correctAnswer: "< h1 >"
  },
  q5:{
    question: "The tag?",
    answerList:[""],
    correctAnswer: ""
  },
  q6:{
    question: "How can you make a numbered list?",
    answerList:["< ol >" , "< list >" , "< ul >"],
    correctAnswer: "< ol >"
  },
  q7:{
    question: "How can you make a bulleted list?",
    answerList:["< dl >" , "< ul >" , "< list >"],
    correctAnswer: "< ul >"
  },
  q8:{
    question: "What is the correct HTML for making a checkbox?",
    answerList:["< checkbox >" , "< check >" , "< input type='checkbox' >"],
    correctAnswer: "< input type='checkbox' >"
  },
  q9:{
    question: "What is the correct HTML for making a text input field?",
    answerList:["< input type='text'>" , "< textfield >" , "< textinput type='text' >"],
    correctAnswer: "< input type='text'>"
  },
  q10:{
    question: "Which attribute is used to specify than an input field must be filled out?",
    answerList:["validate" , "required" , "placeholder"],
    correctAnswer: "required"
  },
  q11:{
    question: "What does CSS stand for?",
    answerList:["Computer Style Sheets" , "Creative Style Sheets" , "Cascading Style Sheets"],
    correctAnswer: "Cascading Style Sheets"
  },
  q12:{
    question: "Which HTML tag is used to define an internal style sheet?",
    answerList:["<CSS>" , "< script >" , "< style >"],
    correctAnswer: "< style >"
  },
  q13:{
    question: "Which property is used to change the background color?",
    answerList:["bgcolor" , "color" , "background-color"],
    correctAnswer: "background-color"
  },
  q14:{
    question: "How do you group selectors?",
    answerList:["Seperate each selector with a space" , "Seperate each selector with a plus sign" , "Seperate each selector with a comma"],
    correctAnswer: "Seperate each selector with a comma"
  },
  q15:{
    question: "How do you select elements with class name 'test'",
    answerList:["*test" , "#test" , ".test"],
    correctAnswer:  ".test"
  },
  q16:{
    question: "Inside which HTML element do we put the JavaScript?",
    answerList:["< script >" , "< js >" , "< javascript >"],
    correctAnswer: "< script >"
  },
  q17:{
    question: "What event occurs when the user clicks on an HTML element?",
    answerList:["onmouseclick" , "onclick" , "onchange"],
    correctAnswer: "onclick"
  },
  q18:{
    question: "How do you declare a javascript variable?",
    answerList:["variable" , "v" , "var"],
    correctAnswer: "var"
  },
  q19:{
    question: "How do you create a function in Javascript?",
    answerList:["function=myfunction()" , "function myFunction()" , "function:myFunction"],
    correctAnswer: "function myFunction()"
  },
  q20:{
    question: "Which operator is used to assign a value to a variable?",
    answerList:["*" , "=" , "-"],
    correctAnswer: "="
  },
  q21:{
    question: "Javascript is the same as Java",
    answerList:["True" , "False" , "Maybe?"],
    correctAnswer: "False"
  },
  q22:{
    question: "Where is the correct place to insert a JavaScript?",
    answerList:["Both the < head > section and the < body > section are correct" , "The < head > section" , "The < body > section"],
    correctAnswer: "Both the < head > section and the < body > section are correct"
  },
  q23:{
    question: "How do you add a comment in a JavaScript?",
    answerList:["<!--This is a comment-->" , "//This is a comment" , "'This is a comment"],
    correctAnswer: "//This is a comment"
  },
  q24:{
    question: "How do you call a function named 'myFunction?",
    answerList:["myFunction()" , "call function myFunction()" , "call myFunction()"],
    correctAnswer: "myFunction()"
  },
  q25:{
    question: "How does a FOR loop start?",
    answerList:["for (i=0; i<=5)" , "for i = 1 to 5" , "for (i = 0; i <= 5; i++)"],
    correctAnswer: "for (i = 0; i <= 5; i++)"
  },
  q26:{
    question: "What data type is represented by text or numbers in between quotation marks?",
    answerList:["Array" , "Number" , "String"],
    correctAnswer: "String"
  },
  q27:{
    question: "What data type is any numeric value?",
    answerList:["Number" , "Array" , "String"],
    correctAnswer: "Number"
  },
  q28:{
    question: "What data type is its own unique type and only has true or false values?",
    answerList:["Object" , "String" , "Boolean"],
    correctAnswer: "Boolean"
  },
  q29:{
    question: "What is a special variable which holds more than one value at a time of any data type?",
    answerList:["Boolean" , "Array" , "String"],
    correctAnswer: "Array"
  },
  q30:{
    question: "What is a key-value pair properties data structure?",
    answerList:["Number" , "Object" , "Array"],
    correctAnswer: "Object"
}
}
function openModal(event) {
    event.currentTarget.style.visibility = "hidden";
    document.querySelector("#myModal").style.visibility = "visible";
    var modalContent = document.getElementById("modalContent");
    var clue = event.currentTarget.id;
    var clueId = document.getElementById("clueId")
    clueId.innerHTML = (clue);
    modalContent.innerHTML = (test[clue].question);
    var answerA1 = document.getElementById("a1");
    var answerB1 = document.getElementById("b1");
    var answerC1 = document.getElementById("c1");
    answerA1.innerText = (test[clue].answerList[0]);
    answerB1.innerText = (test[clue].answerList[1]);
    answerC1.innerText = (test[clue].answerList[2]);
    var answerA = document.getElementById("a");
    var answerB = document.getElementById("b");
    var answerC = document.getElementById("c");
    answerA.innerHTML = (test[clue].answerList[0]);
    answerB.innerHTML = (test[clue].answerList[1]);
    answerC.innerHTML = (test[clue].answerList[2]);
      }
  
     
function closeModal() {   
 document.querySelector("#myModal").style.visibility = "hidden";
 document.getElementById("answerContent").style.visibility = "hidden";
 ["a","b","c"].forEach(function(id) {
    document.getElementById(id).checked = false;
 });
 return false;
}


function checkAnswer(event) {
  event.preventDefault()
  document.getElementById("answerContent").style.visibility = "visible";
  var clueId = document.getElementById("clueId").innerHTML;
var selected = document.querySelector("input[name='answer']:checked");
var display = document.getElementById("answerContent");
if (selected.textContent === (test[clueId].correctAnswer)) {
            display.innerText = "CORRECT";
      } 
      else {
        display.innerHTML = "Sorry the correct answer is " + (test[clueId].correctAnswer); 
    }
  }
  
  