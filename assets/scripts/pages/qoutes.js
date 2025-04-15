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
        {text: "\"All Art is Propaganda\"", from: "-George Orwell"},
         {text: "\"Place Holder 1\"", from: "-Null"},
          {text: "\"Place Holder 2\"", from: "-Null"},
           {text: "\"Place Holder 3\"", from: "-Null"},
            {text: "\"Place Holder 4\"", from: "-Null"},
            {text: "\"Place Holder 5\"", from: "-Null"},
            {text: "\"Place Holder 6\"", from: "-Null"},
            {text: "\"Place Holder 7\"", from: "-Null"},
            {text: "\"Place Holder 8\"", from: "-Null"},
            {text: "\"Place Holder 9\"", from: "-Null"},
        ];
    Qoute_Index = Math.floor(Math.random() * 10)

Qoute.textContent = Quotes_Array[Qoute_Index].text;
Cite.textContent = Quotes_Array[Qoute_Index].from;
