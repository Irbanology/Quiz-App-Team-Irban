import supabaseClient from "../Db/Supabase.js";

const btn = document.getElementById('chaloo')
const LoogIn = document.getElementById('login')
LoogIn.addEventListener('click', AdminLogin)
btn.addEventListener('click', startAuth)
const admin = document.getElementById('Admin')
admin.addEventListener('click', adminn)
const users = document.getElementById("user")
users.addEventListener('click', meuserhoon)

// ADMIN LOGIN 
function adminn() {
    const userdiv = document.getElementById('userAuth')
    let divv = document.getElementById("login-div")
    console.log(divv);
    divv.classList.remove('hidden')
    userdiv.classList.add('hidden')
}
function meuserhoon() {
    const userdiv = document.getElementById('userAuth')
    let divv = document.getElementById("login-div")
    console.log(divv);
    divv.classList.add('hidden')
    userdiv.classList.remove('hidden')
}




async function AdminLogin() {
    console.log("Me chlra hoon");
    let email = document.getElementById("inp3")
    let pass = document.getElementById("inp4")
    email.classList.remove("ring", "ring-[red]")
    pass.classList.remove("ring", "ring-[red]")
    console.log(email, pass);

    if (!email.value || !pass.value) {
        email.classList.add("ring", "ring-[red]")
        pass.classList.add("ring", "ring-[red]")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill All!",
        });
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email.value,
        password: pass.value,
    })
    !error ? window.location.href= '../Admin/index.html' : console.log(error);



}


// Questions 
// async function Questions(){
//     const { data, error } = await supabaseClient
//   .from('Quiz_Question')
//   .select()
// !error ? console.log(data):console.log(error);  
// }
// Questions()



// USER SIGN-UP
async function startAuth() {
    console.log("Start-)");
    let email = document.getElementById("inp1")
    let pass = document.getElementById("inp2")
    let naam = document.getElementById("name")
    console.log(email, pass, naam);

    // startAuth()
    if (!email.value || !pass.value || !naam.value || !pass.value >= 6) {
        console.log("chal");
        email.classList.add("ring", "ring-[red]")
        naam.classList.add("ring", "ring-[red]")
        pass.classList.add("ring", "ring-[red]")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill All!",
        });
        return
    }
    email.classList.remove("ring", "ring-[red]")
    naam.classList.remove("ring", "ring-[red]")
    pass.classList.remove("ring", "ring-[red]")

    const { data, error } = await supabaseClient.auth.signUp({
        email: email.value,
        password: pass.value
    })
    // console.log(error);




    if (error) {
        console.log(error);
    } else {
        console.log(data.user.id);
        let Uid = data.user.id
        Swal.fire({
            title: "Good job!",
            text: "Questions Added!",
            icon: "success"
        });
        const { data: tabdata, error: errortable } = await supabaseClient
            .from('Student Data')
            .insert({
                Name: naam.value,
                Pass: pass.value,
                Email: email.value,
                Uid: data.user.id
            })
            .select()
        !errortable ? console.log(tabdata) : console.log(errortable);
        //   if(!errortable){
        //     email.value = ""
        //     pass.value = ""
        //     naam.value = ""
        //     window.location.href = '../Quiz/quiz.html' 
        //   }else{


        //   }

    }
}
