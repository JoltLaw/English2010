const modal = document.getElementById("modal");
Modal_Displayed = false

const Toggle_Modal = () => {
    if(Modal_Displayed == true) {
        modal.style.display = "none"
        Modal_Displayed = false
    } else {
        modal.style.display = "Flex"
        Modal_Displayed = true
    }
}
