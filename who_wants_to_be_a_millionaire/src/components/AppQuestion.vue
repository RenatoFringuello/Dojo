<script>
import AppBox from './AppBox.vue';

export default {
    name: "AppQuestion",
    components: { AppBox },
    data() {
        return {
            questionIndex:0,
            score:{
                asked:0,
                correct:0,
            },
            questions:[
                {
                    question:'What\'s the Capital of the Myanmar(Birmania)?',
                    answers:[
                        {
                            content:'Yangon',
                            class:'correct'
                        },
                        {
                            content:'Milan',
                            class:'wrong'
                        },
                        {
                            content:'You could answer whatever you want, for me it would be correct. Who the fuck know the capital of Myanmar',
                            class:'wrong'
                        },
                        {
                            content:'New Dheli',
                            class:'wrong'
                        },
                    ],
                },
                {
                    question:'What\'s the color of the white horse of Napoleon?',
                    answers:[
                        {
                            content:'Black',
                            class:'wrong'
                        },
                        {
                            content:'Yellow',
                            class:'wrong'
                        },
                        {
                            content:'Sir Biscuit',
                            class:'wrong'
                        },
                        {
                            content:'White',
                            class:'correct'
                        },
                    ],
                },
                {
                    question:'What\'s the second letter of the alphabet? ',
                    answers:[
                        {
                            content:'D',
                            class:'wrong'
                        },
                        {
                            content:'A',
                            class:'wrong'
                        },
                        {
                            content:'B',
                            class:'correct'
                        },
                        {
                            content:'C',
                            class:'wrong'
                        },
                    ],
                }
            ],
            questionsAsked:[],
        }
    },
    methods: {
        nextQuestion(answs, selected){
            //after 3 sec reset all boxes and give me another question or score
            setTimeout(()=>{
                // resret boxes
                answs.forEach((answ,i) => {
                    if(this.questions.at(this.questionIndex).answers.at(i).class == 'correct' || i == selected){
                        answ.className = answ.className.replace(this.questions.at(this.questionIndex).answers.at(i).class, '');
                    }
                });
                // remove the question asked and save that
                this.questionsAsked.push(this.questions[this.questionIndex]);
                this.questions.splice(this.questionIndex, 1);
                // set another question
                this.questionIndex = Math.floor(Math.random() * this.questions.length);
            }, 3000);
        },
        showAnswers(selected){
            //get the answers box
            const answs = document.querySelectorAll('.answer');
            answs.forEach((answ,i) => {
                // check the correct and the selected one
                if(this.questions.at(this.questionIndex).answers.at(i).class == 'correct' || i == selected)
                    answ.className += ' ' +this.questions.at(this.questionIndex).answers.at(i).class;
            });
            // increment score if is correct
            if(this.questions.at(this.questionIndex).answers.at(selected).class == 'correct')
                this.score.correct ++;
            // increment the n of question asked
            this.score.asked ++;

            this.nextQuestion(answs, selected);
        },
        newGame(isRestart = 1){
            if(isRestart){
                this.questions = this.questionsAsked;
                this.questionsAsked = [];
            }
            this.questionIndex = Math.floor(Math.random() * this.questions.length);
            this.score = {
                asked:0,
                correct:0,
            };
        },
    },
    created(){
        this.newGame(0);
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="wrapper d-flex flex-column">
                <div class="m-auto" :class="(questions.length != 0)? 'mb-5' : ''">
                    <div class="score-box" v-if="questions.length == 0">
                        <div class="row g-3">
                            <div class="col-12">
                                <h1 class="mb-0 text-center">
                                    This is your score
                                </h1>
                            </div>
                            <div class="col-12">
                                <AppBox :content="'Asked: '+score.asked" class="mb-3"/>
                            </div>
                            <div class="col-12">
                                <AppBox :content="'Score: '+score.correct" className="correct"/>
                            </div>
                            <div class="col-12">
                                <AppBox :content="'Restart'" className="answer" @click="newGame()"/>
                            </div>
                        </div>
                    </div>
                    <div class="question-box pt-2" v-if="questions.length != 0">
                        <div class="row g-4">
                            <div class="col-12">
                                <AppBox :content="questions[questionIndex].question"/>
                            </div>
                            <div v-for:="answer, i in questions[questionIndex].answers" class="col-12 col-lg-6"
                                @click="showAnswers(i)">
                                <AppBox :content="String.fromCharCode(65 + i) + '. '+ answer.content" className="answer"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section{
        position: relative;
        background-color: #0003;
        min-height: inherit;
        color: white;
        
        .container,
        .wrapper{
            min-height: inherit;

            .question-box{
                // padding-top:50%;
            }
        }
    }
</style>