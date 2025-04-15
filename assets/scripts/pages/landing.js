// Container
const Landing_Container = document.createElement("div")
Landing_Container.classList = "landingPG"
Landing_Container.id = "landingPG"

// Disconnect Button
const Disconnect_Button = document.createElement("button")
Disconnect_Button.textContent = "Disconnect"
Disconnect_Button.classList = "DisconnetBtn"
Disconnect_Button.id = "DisconnetBtn"
Landing_Container.appendChild(Disconnect_Button)

// Continue Button 
// const Continue_Button = document.createElement("button")
// Continue_Button.textContent = "Continue"
// Continue_Button.classList = "continueBtn"
// Continue_Button.id = "continueBtn"
// Landing_Container.appendChild(Continue_Button)

// Event Listeners

Landing_Container.addEventListener("click", (event) => {
    if(event.target.id == "DisconnetBtn" || event.target.id == "continueBtn" ) {
        Landing_Container.style.animation = "Fade_Out 1s";
        setTimeout(() => {
            Landing_Container.classList = "Do_Not_Display";
        }, 750);
        setTimeout(Advance_Page, 1000)
        
    }
})