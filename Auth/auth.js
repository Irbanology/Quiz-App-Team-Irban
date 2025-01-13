import supabaseClient from "../SupaBase/Supabase.js";

const btn = document.getElementById('chaloo')
btn.addEventListener('click', startGame)
async function startGame(){
    console.log("Start-)");   
    let email = document.getElementById("inp1").value
    let pass = document.getElementById("inp2").value
    let naam = document.getElementById("name").value
    console.log(email , pass , naam);

    if(!email || !pass|| !naam){
        console.log("chal");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill All!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return
    }
    
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: pass
        // name:naam.value
    })
    

    if (error) {
        console.log(error);
    } else {
        console.log(data);
        Swal.fire({
            title: "Good job!",
            text: "Questions Added!",
            icon: "success"
        });
        window.location.href = '../Quiz/quiz.html' 
    }
}

// function startgame(){
//     console.log("hi");
    
// }
// async () => {

    
// }