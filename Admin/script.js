import supabaseClient from "../SupaBase/Supabase.js"



// ADDING QUETIONS
const btn = document.getElementById('sawal')
console.log(btn);

const quest = document.getElementById('ques')
const fAns = document.getElementById('first')
const sAns = document.getElementById('second')
const tAns = document.getElementById('third')
const faAns = document.getElementById('fourth')
const coAns = document.getElementById('correct')
const selc = document.getElementById('sel')
console.log("GHi");

btn.addEventListener('click', question)
async function question() {
    console.log("Rework/Start");

    const questions = quest.value
    const Ans1 = fAns.value
    const Ans2 = sAns.value
    const Ans3 = tAns.value
    const Ans4 = faAns.value
    const corA = coAns.value
    const seleec = selc.value
    console.log(seleec);

    if (!questions || !Ans1 || !Ans2 || !Ans3 || !Ans4 || !corA || !seleec) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill All!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return
    }

    // quest.value = ""
    // fAns1.value = ""
    // sAns.value = ""
    // tAns.value = ""
    // faAns.value = ""
    // coAns.value = ""
    // selc.value = ""
    console.log("ye chalra hai");

    const { data, error } = await supabaseClient
        .from('QUIZ-QUESTION')
        .insert({ Questions: questions, Answer1: Ans1, Answer2: Ans2, Answer3: Ans3, Answer4: Ans4, CorrectAns: corA, Section: seleec })
        .select()
    if (!error) {
        console.log(data);
        Swal.fire({
            title: "Good job!",
            text: "Questions Added!",
            icon: "success"
        });
        dataCom()
    }
}


async function dataCom() {
    const { data, error } = await supabaseClient
        .from('QUIZ-QUESTION')
        .select()
    console.log(data);
}
dataCom()