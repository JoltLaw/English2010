// Creating Elements
const Info_Container = document.createElement("div")
// Header Elements 
// const Header = document.createElement("header")
// Appends

// Landing Image Elements
const Landing_Image_Container = document.createElement("div")
Landing_Image_Container.classList = "Landing_Image"
Landing_Image_Container.style.backgroundImage = "Url(assets/photos/basement_TV.jpg)"
const Image_Overlay = document.createElement("h1")
Image_Overlay.textContent = "Disconnect"
Image_Overlay.classList = "Image_Overlay"
const Landing_Image_Info_Button = document.createElement("a");
Landing_Image_Info_Button.href = "credits.html"
Landing_Image_Info_Button.textContent = "I"
Landing_Image_Info_Button.classList = "Info_Btn"
// Appends
Landing_Image_Container.append(Image_Overlay, Landing_Image_Info_Button);

// Info Section One Elements
const Info_One = document.createElement("div");
Info_One.classList = "Info_Container"
const Info_One_Txt_Container = document.createElement("div");
Info_One_Txt_Container.classList = "Txt_Container"
const Info_One_Heading = document.createElement("h3")
Info_One_Heading.textContent = "Section 1"
Info_One_Heading.classList = "Section_Header"
const Info_One_Para_One = document.createElement("p")
Info_One_Para_One.classList = "Info_Para"
Info_One_Para_One.textContent = "Long invisible strings reach down from the puppet masters hands, orchestrating deliberate movements as if it was nothing more than fate. We now find ourselves under the authority of the very devices we once held the remotes too. The unseen hands pulled us in every direction, like toddlers fighting over their prized teddy bear. "
const Info_One_Para_two = document.createElement("p")
Info_One_Para_two.classList = "Info_Para"
Info_One_Para_two.textContent = "Victims of our own hubris we gloat our media literacy over those who we view as having less, wearing it like a badge of authority that allows us to belittle those without. Yet we so carelessly consume media deemed as entertainment as though it was nothing more than dust in the wind. Ironically, lowering are guards as if in some sort of safe haven when in all reality we’re most susceptible to influence. And so we happily run to tie the marionette strings around our wrists and ankles, Like an elk anxiously attempting to mount its own antlers on the wall of the hunter. "
const Info_One_Image = document.createElement("img")
Info_One_Image.classList = "Inline_Image"
Info_One_Image.src = "./assets/photos/Info_Image_One.jpg"
// const Info_One_Info_Button = document.createElement("button");
// Info_One_Info_Button.textContent = "I"
// Info_One_Info_Button.classList = "Info_Btn"
// Appends
// Info_One_Image.appendChild(Info_One_Info_Button)
Info_One_Txt_Container.append( Info_One_Para_One, Info_One_Para_two)
Info_One.append(Info_One_Txt_Container, Info_One_Image)

// Infor Section Two Elements
const Info_Two = document.createElement("div");
Info_Two.classList = "Info_Container";
const Info_Two_Txt_Container = document.createElement("div");
Info_Two_Txt_Container.classList = "Txt_Container"
const Info_Two_Heading = document.createElement("h3");
Info_Two_Heading.textContent = "Section 2";
Info_Two_Heading.classList = "Section_Header";
const Info_Two_Para_One = document.createElement("p")
Info_Two_Para_One.classList = "Info_Para"
Info_Two_Para_One.textContent = "	Free yourself from the parade of mindless influence you’re subject to. Cut the strings which have bound you for so long. The voices are always saying something, so listen when they speak. Disconnect from mindless consumerism. Just as an athlete is conscious of what they put into their bodies, be conscious of what you allow fortress in your mind. "
const Info_Two_Para_two = document.createElement("p")
Info_Two_Para_two.classList = "Info_Para Final_Statement"
Info_Two_Para_two.textContent = "Stay vigilant of what you consume as entertainment, and always be aware. "
const Info_Two_Image = document.createElement("img");
Info_Two_Image.classList = "Inline_Image"
Info_Two_Image.src = "./assets/photos/Info_Image_Two.jpg"
// Appends
Info_Two_Txt_Container.append( Info_Two_Para_One, Info_Two_Para_two)
Info_Two.append(Info_Two_Image,Info_Two_Txt_Container)

// Call To Action Elements
const Call_To_Action_Container = document.createElement("Form")
Call_To_Action_Container.style.backgroundImage = "Url(assets/photos/CTA_Disconnect_Modifed.png)"
Call_To_Action_Container.classList = "Call_To_Action_Form"
const Call_To_Action_Input = document.createElement("input")
Call_To_Action_Input.type = "Email"
Call_To_Action_Input.placeholder = "Example@email.com"
Call_To_Action_Input.classList = "Email_Input"
Call_To_Action_Input.spellcheck = false
Call_To_Action_Input.autocomplete = false
const Join_Btn = document.createElement("button")
Join_Btn.classList = "Join_Btn";
Join_Btn.textContent = "Join"
// Appends
Call_To_Action_Container.append(Call_To_Action_Input, Join_Btn)

// Appending Elements 
Info_Container.append( Landing_Image_Container, Info_One, Info_Two, Call_To_Action_Container)