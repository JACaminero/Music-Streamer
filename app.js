let loginContainer = document.getElementById("login-container")
let loginButton = document.getElementById("btn-login")
 
// let triggerAnim = (element, anim) => {
//     element.classList.add(anim)
//     element.classList.add("fadeOutDown")
// }

loginButton.onclick = () => {
    loginContainer.style.animation = "fadeOutDown 5s 1"
    setTimeout( () => {
        loginContainer.hidden = true 
    }, 5000)
}