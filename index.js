var questionsArr = [
    {
        question: 'Javascript is a programming language.',
        answer: true 
    },
    {
        question: 'The Earth is flat.',
        answer: false
    },
    {
        question: 'The Great Wall of China can be seen from space.',
        answer: false
    },
    {
        question: 'Lightning can strike in the same place twice.',
        answer: true
    },
    {
        question: 'Mount Everest is the tallest mountain in the world.',
        answer: true
    },
    {
        question: 'World War II ended in 1945.',
        answer: true
    }
];

function runQuiz() {
    var correctAnswers = 0;

    for (var i=0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question);
        if (userAnswer === questionsArr[i].answer) {
            correctAnswers++;
        }
    }

    var scorePercentage = Math.round((correctAnswers / questionsArr.length) * 100);
    alert('You got ' + scorePercentage + '% correct!')
}