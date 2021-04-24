const globals = {
    roomId: 0,
    textId: 0,
    name: [],
    inventory: {},
    roomData: {}
};

const store = {
    rooms: [
        {
            heading: "Prologue",
            lines: [
                `On your walk home from Ethical Corp™ you are filled with a dawning horror as you realize... You left your thermos behind! And it's after hours!
                <br>Flustered you try to remember your first name:`,
                `Good job! After some more consideration you remember your middle name:`,
                `Truly your powers of recollection are remarkable. Your last name then?`,
            ],
            firstNames: ["Marla","Winifred","Albert","Ester","Fenric","Vanessa","Edith","Rene","Trilby","Sanjay","Mateo","Madeline","Stetson","Thing","Franz","Wensleydale","Petra","Marty","Emmett","Biff","Lyndon","Dick","Dolemite","Martok"],
            middleNames: ["Duke", "Pearl"],
            lastNames: ["Griggs","Head","Marzipan","Haberdasher","O'Hara","Stilton","StarRider","Mateo","Etoufee","Lamar","Gloop","Thing","Newstead","Hearst","Nidhogg","Goulash","Jambalaya","Power","Scriabin","Bartok"],
        },
        {
            heading: "The treachery of objects",
            intro: "To get back in first you'll have to enter a combination on a keypad.",
            desc: "What do you enter?",
            correct: "funny number",
            options: [
                {
                    number: "0451",
                    response: "NEEEEEEEEEEEEEERD",
                    prompt: "Fine"
                },
                {
                    number: "A solution to Reimann zeta function with a real part NOT equal to one half.",
                    response: "Very impressive. Unfortunately that's not the code for the keypad. Go collect your Millennium Prize",
                    prompt: "Ok but not before I get my thermos"
                },
                {
                    number: "funny number",
                    response: "Funny things about funny number",
                    prompt: "lemme in"
                },
            ]
        },
        {
            heading: "Time to take Inventory",
            intro: `After that ordeal you make it to the break room. A keycard reader will let you further into the compound. 
            Good news: you have the card. Bad news: a rascally cowoker has defaced it with a big gross mustache. You'll need to get it off with some kind of contrived inventory puzzle...`,
            desc: "As you look around the room you see the following points of interest:",
            areas: [
                {
                    name: "cupboard",
                    desc: "it's a cupboard what do you want",
                    items: ["cup"]
                },
                {
                    name: "stove",
                    desc: "an old grimy stove. sometimes it has trouble lighting",
                    items: ["lighter fluid"]
                },
                {
                    name: "key reader",
                    desc: "an ancient and intimidating key reader",
                    items: ["gross gum"],
                }
            ],
            startingItems: [
                "defaced keycard"
                ],
            unlockItem: "keycard",
            unlockMessage: "swipe the card and move on",
            unlockArea: "key reader",
            items: [
                {
                    name: "cup",
                    desc: "a cracked cup"
                },
                {
                    name: "lighter fluid",
                    desc: "a small bottle of lighter fluid"
                },
                {
                    name: "defaced keycard",
                    desc: "it's your keycard but an ugly mustache has been drawn on it"
                },
                {
                    name: "filled cup",
                    desc: "a cup filled with lighter fluid"
                },
                {
                    name: "keycard",
                    desc: "cleaned up and ready to go!"
                },
                {
                    name: "gross gum",
                    desc: "pried off the keycard reader. why did you take this again?"
                }
            ],
            interactions: [
                {
                    requires: ["cup", "defaced keycard"],
                    response: "you put the keycard in the cup but nothing happens. shame",
                    yields: []
                },
                {
                    requires: ["cup", "lighter fluid"],
                    response: "you put the lighter fluid in the cup. now you have a cup filled with lighter fluid!",
                    yields: ["filled cup"]
                },
                {
                    requires: ["filled cup", "defaced keycard"],
                    response: "you put the keycard in the cup, cleaning off the silly facial hair. finally!",
                    yields: ["keycard"]
                },
                {
                    requires: [],
                    response: "generic 'sorry brah no can do' response",
                    yields: []
                }
            ]
        },
        {
            heading: "Traps!"
        },
        {},
    ]
};

function nextRoom(){
    globals.roomId++;
    globals.textId = 0;
    globals.roomData = {};
    render();
}

function addLine(lineText){
    const content = document.getElementById("content");
    const line = document.createElement("p");
    line.innerText = lineText;
    content.appendChild(line);
}

function addHeading(lineText){
    const content = document.getElementById("content");
    const line = document.createElement("h3");
    line.innerText = lineText;
    content.appendChild(line);
}

function addButton(buttonText, func, parent = null){
    let content = document.getElementById("content");
    if (parent) content = parent;
    const button = document.createElement("button");
    button.addEventListener("click", func);
    button.innerText = buttonText;
    content.appendChild(button);
}

function clearContent(){
    document.getElementById("content").innerHTML = "";
}

function getContent(){return document.getElementById("content");}

function addOptions(options){
    const content = document.getElementById("content");
    const ul = document.createElement("ul");
    options.forEach(option => {
        const text = option.text;
        const func = option.func;
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = text;
        li.appendChild(button);
        ul.appendChild(li);
        button.addEventListener("click", e => func(text));
    });
    content.appendChild(ul);
}

function room0Render(){
    clearContent();
    const content = document.getElementById("content");
    const line = document.createElement("p");
    if (globals.textId === 3){
        // setup next button
        const next = document.createElement("button");
        next.innerText = "Of course"
        line.innerText = `Of course! Your name is and has always been ${globals.name.join(" ")}`;
        content.appendChild(line);
        content.appendChild(next);
        next.addEventListener("click", nextRoom);
        return;
    }
    line.innerHTML = `${store.rooms[0].lines[globals.textId]}`;
    let options;
    if (globals.textId === 0){
        options = store.rooms[0].firstNames;
    }
    else if (globals.textId === 1){
        options = store.rooms[0].middleNames;
    }
    else if (globals.textId === 2){
        options = store.rooms[0].lastNames;
    }
    options = options.map(name => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.appendChild(button);
        button.innerHTML = name;
        button.addEventListener("click", e => {
            globals.textId++;
            globals.name.push(button.innerHTML);
            render();
        });
        return li;
    });
    content.appendChild(line);
    options.forEach(option => content.appendChild(option));
}

function room1Render(){
    if (globals.roomData.picked === undefined){
        globals.roomData.picked = [];
        addLine(store.rooms[1].intro);
    }
    addLine(store.rooms[1].desc);
    let options = store.rooms[1].options.filter(option => !globals.roomData.picked.includes(option.number));
    options = options.map(option => {
        const {number, response, prompt} = option;
        const op = {
            text: number,
            func: () => {
                globals.roomData.picked.push(number);
                clearContent();
                addLine(response);
                if (number === store.rooms[1].correct){addButton(prompt, nextRoom)}
                else{addButton(prompt, render)}
            }
        }
        return op;
    });
    addOptions(options);
}

function room2Render(){
    const room = store.rooms[2];
    const roomData = globals.roomData;
    console.log(roomData.inventory);
    if (roomData.inventory === undefined){
        addLine(room.intro);
        roomData.view = "room";
        roomData.inventory = room.startingItems.slice();
        roomData.area = "";
        roomData.consumed = [];
    }
    if (roomData.view == "inventory"){
        addLine("You have the following items:");
        const ul = document.createElement("ul");
        roomData.inventory.forEach(itemName => {
            const li = document.createElement("li");
            li.innerHTML = `<h3>${itemName}</h3><p>${room.items.find(item => item.name === itemName).desc}</p>`;
            ul.appendChild(li);
            //addHeading(itemName);
            //addLine(room.items.find(item => item.name === itemName).desc);
        });
        document.getElementById("content").appendChild(ul);
        if(roomData.inventory.length > 1)addButton("combine some items", () => {roomData.view = "combine"; render();})
        addButton("back", () => {roomData.view = "room"; render();})
    }
    else if (roomData.view == "combine"){
        roomData.combos = [];
        //const select = document.createElement("select");
        //getContent().appendChild(select);
        const div = document.createElement("div");
        getContent().appendChild(div);
        const form = document.createElement("form");
        div.appendChild(form);
        roomData.inventory.map(item => {
            const option = document.createElement("input");
            form.appendChild(option);
            option.type = "checkbox";
            option.id = item;
            option.addEventListener("click", () => {
                if (roomData.combos.includes(item)){
                    roomData.combos = roomData.combos.filter(itm => itm !== item);
                }
                else{
                    roomData.combos.push(item);
                }
            });
            const label = document.createElement("label");
            form.appendChild(label);
            label.for = item;
            label.innerText = item;
            form.appendChild(document.createElement("br"));
        });
        addButton("combine!", () => {
            let match = null;
            for (let inter of room.interactions){
                if (inter.requires.length === 0){match = inter; continue;}
                else if (inter.requires.length !== roomData.combos.length){continue;}
                let broke = false;
                for (let item of inter.requires){
                    if (!roomData.combos.includes(item)){broke = true; break;}
                }
                if (!broke){match = inter; break;}
            }
            if (match){
                const {requires, response, yields} = match;
                if (yields.length > 0){
                    // remove consumed inventory
                    roomData.inventory = roomData.inventory.filter(item => !requires.includes(item));
                    // adds yieled inventory
                    roomData.inventory.push(...yields);
                    roomData.consumed.push(...requires);
                }
                div.innerHTML = `<p>${response}</p>`;
            }
        }, div);
        addButton("back", () => {roomData.view = "inventory"; render();})
    }
    else{
        addButton("look at inventory", () => {roomData.view = "inventory"; render();})
        if (roomData.area === ""){
            addLine(room.desc);
            const options = room.areas.map(area => {
                const op = {
                    text: area.name,
                    func: () => {roomData.area = area.name; render();}
                }
                return op;
            });
            addOptions(options);
        }
        else{
            const area = room.areas.find(area => area.name === roomData.area);
            addHeading(roomData.area);
            addLine(area.desc);
            const gettables = area.items.filter(item => !roomData.inventory.includes(item) && !roomData.consumed.includes(item));
            if (gettables.length > 0){
                addLine("Were you so inclined you could pilfer the following:");
                const options = gettables.map(get => {
                    return {
                        text: get,
                        func: () => {
                            roomData.inventory.push(get);
                            render();
                        }
                    }
                });
                addOptions(options);
            }
            else{
                addLine("This area seems to be cleared out");
            }
            if (roomData.area === room.unlockArea && roomData.inventory.includes(room.unlockItem)){
                addButton(room.unlockMessage, nextRoom);
            }
            addButton("back", () => {roomData.area = ""; render();})
        }
    }
}

function render(){
    document.getElementById("heading").innerText = store.rooms[globals.roomId].heading;
    clearContent();
    if (globals.roomId === 0) room0Render();
    else if (globals.roomId === 1) room1Render();
    else if (globals.roomId === 2) room2Render();
}

window.addEventListener("load", (event) => {
    render();
});