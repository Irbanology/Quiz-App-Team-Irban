import supabaseClient from "../Db/Supabase.js"



// ADDING QUETIONS
const btn = document.getElementById('sawal')
const quest = document.getElementById('ques')
const fAns = document.getElementById('first')
const sAns = document.getElementById('second')
const tAns = document.getElementById('third')
const faAns = document.getElementById('fourth')
const coAns = document.getElementById('correct')
const selc = document.getElementById('sel')

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
            title: "Fill All!",
            // text: "Fill All!",
        });
        return
    }

    console.log("ye chalra hai");

    const { data, error } = await supabaseClient
        .from('Quiz_Question')
        .insert({ Questions: questions, Answer1: Ans1, Answer2: Ans2, Answer3: Ans3, Answer4: Ans4, CorrectAns: corA, Section: seleec })
        .select()
    if (!error) {
        console.log(data);
        Swal.fire({
            title: "Questions Added!",
            // text: "",
            icon: "success"
        });
        dataCom()
    }

    quest.value = ""
    fAns.value = ""
    sAns.value = ""
    tAns.value = ""
    faAns.value = ""
    coAns.value = ""
    // selc.value = ""
    // window.location.reload()
}


async function dataCom() {
    const { data, error } = await supabaseClient
        .from('Quiz_Question')
        .select()
    console.log(data);
}
dataCom()