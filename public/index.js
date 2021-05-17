let data = [];


var navigation = new Vue({
    el: '#navigation',
    data: {
        answers: [],
        questionIdx: 0
    },
    computed: {
        isPrevDisabled: function() {
            return this.questionIdx == 0;
        },
        isNextDisabled: function () {
            return this.questionIdx == data.length - 1;
        }
    },
    methods: {
        nextQuestion: () => {
            navigation.questionIdx++;
            showQuestion(navigation.questionIdx);
        },
        prevQuestion: () => {
            navigation.questionIdx--;
            showQuestion(navigation.questionIdx);
        },
        finish: () => {
            showResult(showCorrect(1));
        }

    }

})


var question = new Vue({
    el: '#question',
    data: {
        text: '',
        answers: [],
        picked: null,
        player: []
    },
    watch: {
        picked: val => {
            data[navigation.questionIdx].picked = val;
        }
    }

});
var correct = new Vue({
    el: '#correct',
    data: {
        correctAns: Number
    }
})
const showQuestion = (idx) => {
    question.text = data[idx].question;
    question.answers = data[idx].answers;
    question.picked = data[idx].picked;
    correct.correctAns = data[idx].correct;

}


const showResult = (num) => {
    var result = num;
    document.write(result);
}

const init = async () => {
    const res = await axios.get('/api/questions');
    data = res.data.questions;
    showQuestion(0);
    showCorrect(0);
}

init();

