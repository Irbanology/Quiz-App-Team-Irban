import supabaseClient from "../Db/Supabase.js";

const btn = document.getElementById('chaloo')
const LoogIn = document.getElementById('login')
LoogIn.addEventListener('click' , AdminLogin)
btn.addEventListener('click', startAuth)
const admin = document.getElementById('Admin')
admin.addEventListener('click' , adminn)
const users = document.getElementById("user")
users.addEventListener('click' , meuserhoon)
// ADMIN LOGIN 
function adminn(){
    const userdiv = document.getElementById('userAuth')
    let divv = document.getElementById("login-div")
    console.log(divv);
    divv.classList.remove('hidden')
    userdiv.classList.add('hidden')
}
function meuserhoon(){
    const userdiv = document.getElementById('userAuth')
    let divv = document.getElementById("login-div")
    console.log(divv);
    divv.classList.add('hidden')
    userdiv.classList.remove('hidden')
}




function AdminLogin(){
    console.log("Me chlra hoon");
    let email = document.getElementById("inp3")
    let pass = document.getElementById("inp4")
    email.classList.remove("ring" ,"ring-[red]")
    pass.classList.remove("ring" ,"ring-[red]")
console.log(email , pass);

if(!email.value || !pass.value ){
    email.classList.add("ring" ,"ring-[red]")
    pass.classList.add("ring" ,"ring-[red]")
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill All!",
    });
}

}


// Questions 
async function Questions(){
    const { data, error } = await supabaseClient
  .from('QUIZ-QUESTION')
  .select()
//   if(!error){
//       console.log(data);
//   }else{
//     console.log(error);
//   }

!error ? console.log(data):console.log(error);  
}
Questions()



// USER SIGN-UP
async function startAuth(){
    console.log("Start-)");   
    let email = document.getElementById("inp1")
    let pass = document.getElementById("inp2")
    let naam = document.getElementById("name")
    console.log(email , pass , naam);

    // startAuth()
    if(!email.value || !pass.value|| !naam.value || !pass.value >= 6){
        console.log("chal");
        email.classList.add("ring" ,"ring-[red]")
        naam.classList.add("ring" ,"ring-[red]")
        pass.classList.add("ring" ,"ring-[red]")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill All!",
        });
        return
    }
    email.classList.remove("ring" ,"ring-[red]") 
    naam.classList.remove("ring" ,"ring-[red]")
    pass.classList.remove("ring" ,"ring-[red]")
    
    const { data, error } = await supabaseClient.auth.signUp({
        email: email.value,
        password: pass.value
    })
    // console.log(error);
    

    

    if (error) {
        console.log(error);
    } else {
        console.log(data.user.id);
        let uid = data.user.id
        Swal.fire({
            title: "Good job!",
            text: "Questions Added!",
            icon: "success"
        });
    const { error : errortable } = await supabaseClient
  .from('Users-Data')
  .insert({
    user_name : naam.value,
    Uid:uid,
    pass: pass.value,
    user_email: email.value    
  })
  if(!errortable){
    email.value = ""
    pass.value = ""
    naam.value = ""
    window.location.href = '../Quiz/quiz.html' 
  }
        
    }
}

// function startgame(){
//     console.log("hi");
    
// }
// async () => {

    
// }