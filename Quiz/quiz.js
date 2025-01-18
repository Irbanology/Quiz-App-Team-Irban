import supabaseClient from "../Db/Supabase.js";


let section;
let question;
let ans1;
let ans2;
let ans3;
let ans4;
let correctans;

// GETTING QUESTIONS FROM SUPABASE
async function Questions() {
    console.log("GETTING QUESTIONS FROM SUPABASE");

    const { data, error } = await supabaseClient
        .from('QUIZ-QUESTION')
        .select()

    console.log(data.length);

    !error ? console.log(data) : console.log(error);

    for (let i = 0; i < data.length; i++) {
        section = data[i].Section
        question = data[i].Questions
        ans1 = data[i].Answer1
        ans2 = data[i].Answer2
        ans3 = data[i].Answer3
        ans4 = data[i].Answer4
        correctans = data[i].CorrectAns
        console.log(section);
        console.log(question);
        console.log(ans1);
        console.log(ans2);
        console.log(ans3);
        console.log(ans4);
        console.log(correctans)
    }

}
Questions()


