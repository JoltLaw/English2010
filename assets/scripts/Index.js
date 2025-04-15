// fetching Elements
const DocumentScreen = document.getElementById("screen")
const landingPG = document.getElementById("landingPG");

const pages = [Landing_Container, Qoute_Container, Info_Container]

let currentPG = 0

// General Functions

const Display_Page = (Index) => {
    DocumentScreen.appendChild( pages[Index])  
}

const Clear_Page = () => {
    DocumentScreen.firstElementChild.remove()

}

const Advance_Page = () => {

    currentPG++
    Clear_Page()
    Display_Page(currentPG)
    pages[currentPG].style.animation = "Fade_In 2s"
    if (currentPG === 1) {
        setTimeout(() => {
            Qoute_Container.style.animation = "Fade_Out 2s"
        }, 2000)
        setTimeout(() => {
            Qoute_Container.classList = "Do_Not_Display"
        }, 3500)
        setTimeout(Advance_Page, 3500)
    }
}

DocumentScreen.appendChild(pages[currentPG]);