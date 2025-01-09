const supabaseUrl = 'https://cxekmhqrtebmzkelxjui.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4ZWttaHFydGVibXprZWx4anVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MDU0NjAsImV4cCI6MjA1MTk4MTQ2MH0.eOuU6U31a5xLpZmn_llacEncJ7_Ho7SRPZjzH8iRZA4'
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)
console.log(supabaseClient);


const quest = document.getElementById('ques')
const fAns = document.getElementById('first')
const sAns = document.getElementById('second')
const tAns = document.getElementById('third')
const faAns = document.getElementById('fourth')
const coAns = document.getElementById('correct')
const selc = document.getElementById('sel')


async function question() {
    console.log("rework");
    
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
    }
}
