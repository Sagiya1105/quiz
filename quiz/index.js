let data = [
    {
        question: '1+1',
        answers: [1, 2, 3, 4, 6, 8, 6, 5, 45, 67],
        correct: 1
    },
    {
        question: '2+2',
        answers: [5, 52, 12, 4],
        correct: 3
    },
    {
        question: '3+3',
        answers: [755, 6, 34545, 8],
        correct: 3
    }
]

var question = new Vue({
    el: '#question',
    data: {
        text: ''
    }
});

var answers = new Vue({
    el: '#answers',
    data: {
        answers: []
    }
})

let questionIdx = 0;

const showQuestion = (idx) => {
    question.text = data[idx].question;
    answers.answers = data[idx].answers
}

var navigation = new Vue({
    el: '#navigation',
    // data: {
    //   answers: []
    // }
    methods: {
        nextQuestion: () => {
            questionIdx++;
            showQuestion(questionIdx);
        },
        prevQuestion: () => {
            questionIdx--;
            showQuestion(questionIdx);
        }
    }
})




showQuestion(questionIdx);