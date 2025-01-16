import supabaseClient from "../SupaBase/Supabase.js";

const btn = document.getElementById('chaloo')
const div = document.getElementById('btn-div') 
const LoogIn = document.getElementById('login')

let email = document.getElementById("inp1")
let pass = document.getElementById("inp2")

let naam = document.getElementById("name")
btn.addEventListener('click', startAuth)
const admin = document.getElementById('Admin')
admin.addEventListener('click' , adminlogin)


function adminlogin(){
    btn.classList.add('hidden')
    div.classList.add('hidden')
    naam.classList.add('hidden')
    LoogIn.classList.remove('hidden')

    let email = document.getElementById("inp1")
    let pass = document.getElementById("inp2")

    email.setAttribute('placeholder' , 'Enter your Admin Email')
    pass.setAttribute('placeholder' , 'Enter your Admin Password')


    if(!email.value || !pass.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill All!",
        });
        return
    }

}

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
//     const { error : errortable } = await supabaseClient
//   .from('Users-Data')
//   .insert()

    

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