const quizData = [
    {
        questões: "Qual Linguagem é executado em um navegador da web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        questões: "O que significa CSS?",
        a: "Folhas de estilo centrais",
        b: "Folhas de estilo em cascata",
        c: "Folhas simples em cascata",
        d: "Carros SUVs Veleiros",
        correct: "b",
    },
    {
        questões: "O que significa HTML?",
        a: "Linguagm de marcação de hipertexto",
        b: "Linguagem Markdown de hipertexto",
        c: "Linguagem de máquina Hyperloop",
        d: "Terminais de Helicópteros Lanchas Lamborginis",
        correct: "a",
    },
    {
        questões: "Em que ano o JavaScript foi lançado?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "nenhuma das acima",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questoesEl = document.getElementById('questões')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0 
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questoesEl.innerText = currentQuizData.questões
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> Você respondeu ${score}/${quizData.length}perguntas corretamente</h2>
            
            <button onclick="location.reload()">Recarregar</button>
            `
        }
    }
})
