    // creating elements
    const Qoute_Container = document.createElement("div");
    Qoute_Container.classList = "Qoute_Container"
    const Qoute = document.createElement("h1");
    Qoute.classList = "Qoute"
    const Cite = document.createElement("span");
    Cite.classList = "Cite"
    Qoute_Container.append(Qoute, Cite);

    // Variables 
    Quotes_Array = [
        {text: "\"All Art is Propaganda\"", from: "―George Orwell"},
         {text: "\“But if thought corrupts language, language can also corrupt thought.\"", from: "―George Orwell"},
          {text: "\"Propaganda is to a democracy what the bludgeon is to a totalitarian state.\"", from: "-Noam Chomsky"},
            {text: "\"You can sway a thousand men by appealing to their prejudices quicker than you can convince one man by logic.\"", from: "-Robert A. Heinlein"},
            {text: "\"Those who are capable of tyranny are capable of perjury to sustain it.\"", from: "-Lysander Spooner"},
            {text: "\"The American people are free to do exactly what they are told.\"", from: "-Ward Churchill"},
            {text: "\"Place Holder 1\"", from: "-Null"},
            {text: "\"Place Holder 2\"", from: "-Null"},
            {text: "\"Place Holder 3\"", from: "-Null"},
            {text: "\"Place Holder 4\"", from: "-Null"},
        ];
    Qoute_Index = Math.floor(Math.random() * 6); 

Qoute.textContent = Quotes_Array[Qoute_Index].text;
Cite.textContent = Quotes_Array[Qoute_Index].from;
