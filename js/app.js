let loginContainer = document.getElementById("login-container")
let loginButton = document.getElementById("btn-login")
 
loginButton.onclick = () => {
    loginContainer.style.animation = "fadeOutDown 5s 1"
    setTimeout( () => {
        loginContainer.hidden = true 
    }, 5000)
}