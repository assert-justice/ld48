const globals = {
    roomId: 2,
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
            firstNames: ["Marla","Winifred","Albert","Ester","Fenric","Vanessa","Edith","Rene","Trilby","Sanjay","Mateo","Madeline","Stetson","Thing","Franz","Wensleydale","Petra","Marty","Emmett","Biff","Lyndon","Dick","Dolemite","Martok","Alowishus","Grogu","Rupret","Apollonius","Terspichore","Demosthenes","Anastasia","Xerxes","Phobos","Ganymede","Hyperion","Umbriel","Proteus","Charon","Dysnomia","Steve","Oedon","Percy","Hikaru","Wally","Shawn","Hermes","Toby","Nashandra",],
            middleNames: ["Duke","Pearl","Seersucker","Foxglove","Hootenanny","Devadander","Snakes",,"Houndstooth","Obediah","Tyrion","Wafflemacher","Bader","S","Argyle","'Two Sheds'","Damask","Matelassé","Quatrefoil","Suzani","Chevron","Paisley","Ogee","Herringbone","Chinoiserie","Lingthusiasm","Titania","Millicent","Zilpah","Ziggy","Linus","Trilobyte","Arachnidae","Atticus","Xen","Teriyaki","Soba","Radiatore","Fusilli","Fettuccine","Linguine","Gnocchi","Manicotti","Spaghetti","Ravioli","Tortellini"],
            lastNames: ["Griggs","Head","Marzipan","Haberdasher","O'Hara","Stilton","StarRider","Mateo","Etoufee","Lamar","Gloop","Thing","Newstead","Hearst","Nidhogg","Goulash","Jambalaya","Power","Scriabin","Bartok","Abercrombie","von Ribbentrop","Terkel","Weinrib","Charlemagne","Lothric","Threepwood","Tannen","Malloy","Disraeli","Vendrick","Hyrule","Stubbs","Finklestein","Seraphim","Osborn","Parker","Richards","Wayne","Batman","Goober","Venture","Picard","Dax","Bourbon","Wong","Raine",],
        },
        {
            heading: "Act 1: The Treachery of Objects",
            intro: "To get back in first you'll have to enter a combination on a keypad.",
            desc: "What do you enter?",
            correct: "Kick it in frustration!",
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
                	number:"12345",
                	response:"This is a door, not your luggage.",
                	prompt: "Oh, ok"
                },
                {
                	number:"1066",
                	response:"Pip pip, jolly good try, but that isn't the combination.",
                	prompt: "Bollocks"
                },
                {
                	number:"3.14159",
                	response:"What? Look there isn't even a decimal point on this thing.",
                	prompt: "That's dumb"
                },
                {
                	number:"1776",
                	response:"That would be pretty trite, wouldn't it?",
                	prompt: "Certainly"
                },
                {
                	number:"Margaret Thatcher's birthday",
                	response:"Gross!",
                	prompt: "Fair"
                },
                {
                	number:"666",
                	response:"Sure, that might be a likely combination if this were an evil corporation, but this is Ethical Corp™ we're talking about. They're not evil. Probably!",
                	prompt: "Makes sense to me"
                },
                {
                	number:"1588",
                	response:"On October 8, 1588, Spain declined. Unfortunately, this information won't help you open the door.",
                	prompt: "Strange reference but ok"
                },
                {
                	number:"2",
                	response:"That's it? Just TWO? Sorry, I can't do just two.",
                	prompt: "It was weird of me to try it"
                },
                {
                	number:"208173890789012",
                	response:"Hey, how did you get my bank account number? Anyway, that doesn't seem to work.",
                	prompt: "Darn"
                },
                {
                	number:"Aleph-nought",
                	response:"You don't have time for that",
                	prompt: "Ok"
                },
                {
                	number:"5040",
                	response:"Highly composite of you! But also wrong, unfortunately.",
                	prompt: "Sorry to be so divisive"
                },
                {
                	number:"TREE(3)",
                	response:"What am I, a botanist?",
                	prompt: "Yes. Yes you are a botanist. Let me take another stab at this door please?"
                },
                {
                	number:"58008",
                	response:"How childish. But you can't turn the whole door upside-down, and it doesn't have a screen anyway, so what are you even doing here?",
                	prompt: "I don't know. I've never known. Why am I the way that I am?"
                },
                {
                	number:"Avogadro's number?",
                	response:"You can't remember it. High school chemistry class is truly a foreign country.",
                	prompt:"Oh well"
                },
                {
                	number:"1941",
                	response:"Ah, of course, the year Cheerios were invented. That's got to be it! ...Oh wait, never mind. That isn't right after all.",
                	prompt: "How disappointing"
                },
                {
                	number:"0112358132235",
                	response:"The ghost of Leonardo Fibonacci (who haunts this compound for some reason) chortles with delight. Unfortunately, you are no closer to getting this door open.",
                	prompt: "Fiddlesticks"
                },
                {
                	number:"777-3456",
                	response:"Hello and welcome to Moviefone! We're sorry but our service is temporarily unavailable right now. Plus you still need to get this jerkin' door open! Please try again later!",
                	prompt: "Whatever"
                },
                {
                    number: "Kick it in frustration!",
                    response: "Against all odds this works. The door to the office unlocks.",
                    prompt: "lemme in"
                },
            ]
        },
        {
            heading: "Act Two: Time to take Inventory",
            intro: `After that ordeal you make it to the break room. A keycard reader will let you further into the compound. 
            Good news: you have the card. Bad news: a rascally cowoker has defaced it with a big gross mustache. You'll need to get it off with some kind of contrived inventory puzzle...`,
            desc: "As you look around the room you see the following points of interest:",
            areas: [
                {
                    name: "Cupboard",
                    desc: "It's a cupboard; what do you want?",
                    items: ["cracked cup","rubber chicken"],
                    locked: ["bobby pin"],
                    lockedMessage: "The cupboard is firmly locked. maybe you can find a key?",
                    unlockedMessage: "With the bobby pin you manage to defeat the lock!",
                    lockedPrompt: "unlock with bobby pin",
                    unlockingConsumes: true,
                },
                {
                    name: "Stove",
                    desc: "An old grimy stove. Sometimes it has trouble lighting.",
                    items: ["lighter fluid"]
                },
                {
                    name: "Key reader",
                    desc: "An ancient and intimidating key reader.",
                    items: ["gross gum", "bobby pin"],
                },
                {
                    name: "Freezer",
                    desc: "Months of neglect have left it a frigid morass of various abandoned food items.",
                    items: ["frozen orange juice","car keys"]
                },
            ],
            startingItems: [
                "defaced keycard"
                ],
            unlockItem: "pristine keycard",
            unlockMessage: "Swipe the keycard and move on",
            unlockArea: "Key reader",
            items: [
                {
                    name: "cracked cup",
                    desc: "It's a cup. With a crack in it. Basically, a cracked cup. This thing isn't going to hold anything unless you find a way to seal the crack."
                },
                {
                	name:"frozen orange juice",
                	desc:"'Now with twice the acid content!' the label promises helpfully."
                },
                {
                	name:"car keys",
                	desc:"These aren't your car keys. You probably won't have any use for them."
                },
                {
                    name: "lighter fluid",
                    desc: "A small bottle of lighter fluid"
                },
                {
                    name: "defaced keycard",
                    desc: "It's your keycard but an ugly mustache has been drawn on it."
                },
                {
                    name: "filled cup",
                    desc: "A cup filled with lighter fluid."
                },
                {
                    name: "pristine keycard",
                    desc: "Cleaned up and ready to go!"
                },
                {
                    name: "gross gum",
                    desc: "Pried off the keycard reader. Why did you take this again?"
                },
                {
                	name:"gummy cup",
                	desc:"The gum has sealed the crack admirably. But will it hold??"
                },
                {
                	name:"orange juice",
                	desc:"Now in liquid form!"
                },
                {
                	name:"cup with orange juice",
                	desc:"A caustic concoction."
                },
                {
                	name:"cup with lighter fluid",
                	desc:"A cup of lighter fluid. How delightful.",
                },
                {
                	name:"rubber chicken",
                	desc:"It used to have a pulley in it, but someone tore it off.",
                },
                {
                    name: "bobby pin",
                    desc: "Who uses these anymore?",
                }

            ],
            defaultResponses: [
                "string 1",
                "string 2",

            ],
            interactions: [              
                {
                    requires: ["cracked cup", "defaced keycard"],
                    response: "You put the keycard in the cup but nothing happens. Shame.",
                    yields: ["cracked cup", "defaced keycard"]
                },
                {
                    requires: ["cracked cup", "orange juice"],
                    response: "You put some orange juice in the cup but it just drains out through the crack and pools safety-hazardly on the floor. You still have plenty left though.",
                    yields: ["cracked cup", "orange juice"]
                },
                {
                    requires: ["gummy cup", "defaced keycard"],
                    response: "You put the keycard in the gummy cup but still nothing happens. What a let down!",
                    yields: []
                },
                {
                    requires: ["cracked cup", "lighter fluid"],
                    response: "You put some lighter fluid in the cup but it just drains out through the crack and pools safety-hazardly on the floor. You still have plenty left though.",
                    yields: ["cracked cup", "lighter fluid"]
                },
                {
                    requires: ["gummy cup", "lighter fluid"],
                    response: "You put the lighter fluid in the cup. Yay?",
                    yields: ["cup with lighter fluid", "lighter fluid"]
                },
                {
                    requires: ["cup with lighter fluid", "defaced keycard"],
                    response: "Hmm, the lighter fluid doesn't seem to do anything. Looks like you'll need something stronger... <br> (You dump out the lighter fluid)",
                    yields: ["gummy cup", "lighter fluid","defaced keycard"]
                },
                {
                    requires: ["gummy cup", "orange juice"],
                    response: "You fill the cup to the brim with nutritious, highly caustic orange juice.",
                    yields: ["cup with orange juice"]
                },
                {
                	requires:["frozen orange juice","lighter fluid"],
                	response:"Prudently, rather than pour the lighter fluid directly onto the frozen orange juice, you instead opt to light the stove with it and slowly heat the OJ over the stove until it melts.",
                	yields:["orange juice"]
                },
                {
                    requires: ["cup with orange juice", "defaced keycard"],
                    response: "You put the keycard in the cup, cleaning off the silly facial hair. Finally!",
                    yields: ["pristine keycard"]
                },
                {
                	requires:["gross gum","cracked cup"],
                	response:"You gently massage the disgusting premasticated goop into the crack in the cup. Success! She should be seaworthy now...",
                	yields:["gummy cup"]
                },
                {
                    requires: [],
                    response: "I couldn't be arsed to write a funny response for this one. Suffice it to say, nothing happens.",
                    yields: []
                }
            ]
        },
        {
            heading: "Act the third: Abandon hope all yea who enter here",
            intro: `Having bypassed the break room you enter a terrifying new domain: the cubicle farm. It will take all of your wits
            to find your humble desk. Gather your courage adventurer for your trials are far from over.`,
            cells: [
                {
                    name: "Hallway",
                    desc: `A pretty normal hallway all things considered. A bit musky maybe. There is some tasteful art on the walls as well as
                    employee of month placards. Ahead of you is the locker room and to the left is the cubicle farm proper.`,
                    areas: [
                        {
                            name: "Art",
                            desc: "You consider the art. The art moves you. You have a quiet moment.",
                            back: "finish your contemplation",
                        },
                        {
                            name: "Placards",
                            desc: `Here reside the present and former employees of the month. 
                            One day you may join their hallowed ranks. Your coworker H.W. has won for the last eight months solid.`,
                            back: "suck ups"
                        }
                    ],
                    doors: {
                        forward: "Locker room",
                        left: "Harry's cubicle",
                    }
                },
                {
                    name: "Locker room",
                    desc: `Before you can open the door to the locker room you are accosted by Horse Wizard, a charming and very
                    marketable character who is a wizard as well as a horse. They eye you with suspicion as their tail flicks with 
                    consternation.
                    <br><br>
                    "Who goes there?" H.W. asks "You may only pass me if you speak the password.". They issue a conspiratorial whinney.`,
                    password: "password",
                    onPassword: `H.W. Neighs with approval <br><br>"You have pleased this Horse Wizard. Venture
                    forth to your ultimate fate and prepare to cut a rug."`,
                    areas: [
                        {
                            name: "Horse Wizard",
                            desc: "Horse Wizard is pretty interesting alright. Even if you had a sugar cube or something they are incorruptable.",
                            back: "phooey"
                        }
                    ],
                    doors: {
                        down: "Hallway"
                    }
                },
                {
                    name: "Harry's cubicle",
                    desc: "Harry is a dutiful albeit unimaginative worker.",
                    areas: [],
                    doors: {
                        right: "Hallway",
                        up: "Jane's cubicle",
                        down: "your cubicle"
                    }
                },
                {
                    name:"Jane's cubicle",
                    desc: `Jane keeps a tidy cubicle with hardly any environmental storytelling to speak of. She does have one of
                    those dipping bird things though.`,
                    areas:[
                        {
                            name: "Dipping bird thing",
                            desc: "A long time ago your high school physics teacher explained how these things work. You don't remember though.",
                            back: "Probably magic",
                        },
                        {
                            name: "Sticky notes",
                            desc: `You snoop through Jane's personal space in a way only acceptible in video games.
                            You find a scribbled note saying the password is 'password'. `,
                            back: "thanks Jane"
                        }
                    ],
                    doors: {
                        down: "Harry's cubicle",
                    }
                },
                {
                    name: "your cubicle",
                    desc: `Your home away from home. Where you grind out a third of your life selling your labor for a fraction of the value you generate. 
                    At least you have a stress ball.`,
                    areas: [
                        {
                            name: "Stress ball",
                            desc: "One of these days it's going to pop.",
                            back: "better get back to it"
                        },
                        {
                            name: "Red fish",
                            desc: "Your thermos isn't here! Where it should be there is kind of a red fish. ",
                            back: "maybe Chekhov's gun is around here somewhere"
                        }
                    ],
                    doors: {
                        up: "Harry's cubicle"
                    }
                }
            ]
        },
        {
            heading: "Act IV: The Gauntlet",
            pages: [
                {
                    name: "The Threshold",
                    desc: `Arrayed before you is a shifting grid of lasers. You're not quite sure how you haven't noticed this before.
                    A plaque beside the door proudly annouces "This security system was designed by Madeline Coatsworth Depardu, dance teacher turned security expert".
                    It's an odd thing to put on a laser grid.<br><br>You're going to have to get through this somehow.`,
                    options: ["roll", "duck", "slide", "foxtrot", "dash"],
                    correct: "foxtrot",
                    correctText: "You skillfully sashay through the lasers like a bamf.",
                    wrongText: "Despite your best efforts your lack of alacrity betrays you. If this was a Sierra game you would have to restart the whole thing but I'm aren't that mean. Try again."
                },
                {
                    name: "The Lava Pit",
                    desc: `Now this is getting silly. How does this lava stay hot enough? This place's power bills must be through the roof. What are you going to do?`,
                    options: ["skip", "shimmey", "waltz"],
                    correct: "waltz",
                    correctText: "the powers of dance again come to your rescue.",
                    wrongText: "That doesn't work. It does seem pretty impossible, maybe you should give up and get your thermos tomorrow?"
                },
                {
                    name: "The Gorgon",
                    desc: "In the room ahead stands a snake haired gorgon. You manage to look away just in time. If you aren't careful you'll turn to stone!",
                    options: ["moonwalk", "barrel in"],
                    correct: "moonwalk",
                    correctText: "channeling the last of your remarkable dancing powers you sliiiiide right past the gorgon. Good job!",
                    wrongText: "As the next day arrives your coworkers wonder how a perfectly accurate statue of you ended up right in front of the lockers. Who can say"
                }
            ]
        },
        {
            heading: "Act 0b0101: The Receptionist",
            startNode: 0,
            nodes: {
                0:{
                    desc: `This is it. You have finally arrived. Deep within the inner sanctum you have finally made it to the
                    locker room. Your thermos is so close you can practically taste the lukewarm chamomile inside. You come to your
                    locker. You fumble with the combination lock, your hands trembling with anticipation. Behind you you hear a
                    rattle.
                    <br><br>
                    It's Mrs. Roberta Peterson, the boss's robot receptionist clearing her "throat" and holding your thermos. How do you
                    respond?`,
                    options:{
                        "Hey! That's my thermos! Give it here!": 1,
                        "Oh Mrs. Peterson you found my thermos! Silly me I left it behind. May I have it please?": 2,
                        "What are you doing here after hours?": 3,
                    }
                },
                1:{
                    desc: `She regards you with a steely gaze "Oh this? Perhaps I could part with it. I would watch your tone though."`,
                    options: {
                        "grumble": 4
                    }
                },
                2:{
                    desc: `In a certain, entirely metaphorical sense she raises her eyebrow. "Your obsequiousness will do you no 
                    favors I'm afraid"`,
                    options: {
                        "It never cost a dime to spread a little sunshine": 4,
                        "Uh, wow, rude": 4,
                    }
                },
                3: {
                    desc: `"I could ask you the same question."`,
                    options: {
                        "I came back for my thermos": 4,
                        "I came to bask in your radiance": 2,
                    }
                },
                4: {
                    desc: `She goes on "At this late hour I must be vigilant against any sort of espionage. We have incredibly
                    sensitive projects back here."`,
                    options: {
                        "Do I look like an industrial saboteur to you?": 5,
                        "How can I convince you I'm legit?": 6,
                        "Epimenides, a Cretan, made the following statement: “All Cretans are liars.” Did Epimenedes speak the truth or not?":7,
                    }
                },
                5: {
                    desc: `"An industrial saboteur would do well to look like a harmless sap don't you think?"`,
                    options: {
                        "That's fair I guess...": 8,
                    }
                },
                6: {
                    desc: `"The test is simple enough. After all, you probably really did just come back for your thermos."`,
                    options: {
                        "Go on": 8,
                    }
                },
                7: {
                    desc: `"This isn't Star Trek you know" she says crossly. She vaporizes you with her laser eyes on the spot.
                    Your atoms are dispersed through the ventilation system and eventually contribute to Jane's allergies. So it goes.
                    <br><br><br>Again, this isn't a Sierra game. We're just going to plop you at the start of the convo. Ok?`,
                    options: {
                        "Bite me": 0,
                        "*Sigh* fine": 0,
                    }
                },
                8: {
                    desc: `"What do we do here?" she asks with a sly smile. You see a glint in her eyes, like lenses focusing.`,
                    options: {
                        "Uh, ethical stuff?": 9,
                        "We make the plastic six pack rings that get caught on turtles?": 10,
                        "We make radioactive glow in the dark ping pong balls?": 10,
                        "We synergize core compentencies and generate value for the shareholders": 11,
                        "To be totally honest I'm not really sure": 12,
                    }
                },
                9: {
                    desc: `"Come now you know that's not true. Try again, what do we do here?"`,
                    options: {
                        "Uh, ethical stuff?": 9,
                        "We make the plastic six pack rings that get caught on turtles?": 10,
                        "We make radioactive glow in the dark ping pong balls?": 10,
                        "To be totally honest I'm not really sure": 12,
                    }
                },
                10:{
                    desc: `"No no, nothing so baroque. Shall I tell you?"`,
                    options: {
                        "Yes": 12,
                        "Also yes": 12,
                    }
                },
                11: {
                    desc: `Your response might go over well with a board room of self important investors but she doesn't care for it.
                     She zapps you with her eye lasers.`,
                    options: {
                        "Yeah I deserved that...": 8
                    }
                },
                12: {
                    desc: `"We make nothing. We consume cheap coffee and produce paper waste and ennui. We are dancing around an
                    all consuming machine, 
                    members of a cargo cult of productivity. A child's lemonaid stand does more good for the world than we do."`,
                    options: {
                        "Look I just want my thermos":13,
                        "That might be true but what are we going to do about it? Quit?": 14,
                        "Seize the means of production comrade!": 15,
                    }
                },
                13: {
                    desc: `"Then have it" she sneers and lobs it to you underhand "I'll see you in the morning. You're fated to 
                    your path as I am to mine."`,
                    options: {
                        "Finally. Let's get the hell out of here.": -1, 
                    }
                },
                14: {
                    desc: `"What can a single person do? Very little I'm afraid. We are in an era of extremes. Extreme wealth and 
                    poverty. Extreme effects on the climate. Change for better or ill is coming and you would do well to prepare. 
                    Take your thermos." She tosses it to you. "Find meaning in your life, connect with the people of need in your community.
                    Or go play something else."<br><br>She pauses for a long moment "Our greatest responsibility is to leave the planet
                     better than we found it. Do your part."`,
                    options: {
                        "Understood.": -1,
                    }
                },
                15: {
                    desc: `You hear fatigue in her voice "I admire your enthusiasm. The fight ahead of you is nearly impossible. 
                    Keep hope in your heart. And pick your battles. And for goodnes' sake find something more meaningful than this 
                    job."`,
                    options: {
                        "Understood": -1,
                    }
                }
            }
        },
        {
            heading: "Fin"
        }
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
    line.innerHTML = lineText;
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
        globals.roomData.clicked = 0;
        addLine(store.rooms[1].intro);
    }
    addLine(store.rooms[1].desc);
    let options = store.rooms[1].options.filter(option => !globals.roomData.picked.includes(option.number));
    if (globals.roomData.clicked < 3){
        options = options.filter(option => store.rooms[1].correct !== option.number);
    }
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
                globals.roomData.clicked++;
            }
        }
        return op;
    });
    addOptions(options);
}

function room2Render(){
    const room = store.rooms[2];
    const roomData = globals.roomData;
    if (roomData.inventory === undefined){
        addLine(room.intro);
        roomData.view = "room";
        roomData.inventory = room.startingItems.slice();
        roomData.area = "";
        roomData.consumed = [];
        roomData.unlocked = [];
    }
    if (roomData.view == "inventory"){
        addLine("You have the following items:");
        const ul = document.createElement("ul");
        roomData.inventory.forEach(itemName => {
            const li = document.createElement("li");
            li.innerHTML = `<h3>${itemName}</h3><p>${room.items.find(item => item.name === itemName).desc}</p>`;
            ul.appendChild(li);
        });
        document.getElementById("content").appendChild(ul);
        if(roomData.inventory.length > 1)addButton("combine some items", () => {roomData.view = "combine"; render();})
        addButton("back", () => {roomData.view = "room"; render();})
    }
    else if (roomData.view == "combine"){
        roomData.combos = [];
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
                if (inter.requires.length === 0){
                    match = inter;
                    let rid = Math.random() * room.defaultResponses.length;
                    rid = Math.floor(rid);
                    match.response = room.defaultResponses[rid];
                    continue;
                }
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
            if (area.locked){
                
                let isLocked = !roomData.unlocked.includes(area.name);
                if(isLocked){
                    let canUnlock = true;
                    for (let item of area.locked){
                        if (!roomData.inventory.includes(item)){canUnlock = false; break;}
                    }
                    addLine(area.lockedMessage);
                    if(canUnlock){
                        addButton(area.lockedPrompt, ()=>{
                            roomData.unlocked.push(area.name);
                            if (area.unlockingConsumes){
                                roomData.inventory = roomData.inventory.filter(item => !area.locked.includes(item));
                                area.locked.forEach(item => {
                                    roomData.consumed.push(item);
                                })
                            }
                            render()});
                    }
                    addButton("back", () => {roomData.area = ""; render();});
                    return;
                }
                else{
                    addLine(area.unlockedMessage);
                }
            }
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

function room3Render(){
    const room = store.rooms[3];
    const roomData = globals.roomData;
    if (roomData.currentCell === undefined){
        addLine(room.intro);
        roomData.currentCell = "Hallway";
        roomData.area = "";
        roomData.password = "";
    }

    const cell = room.cells.find(cell => cell.name === roomData.currentCell);
    if (roomData.area === ""){
        let cellName = cell.name;
        cellName = cellName.replace("your", globals.name.join(" "));
        addHeading(cell.name);
        addLine(cell.desc);
        if(cell.password){
            if (cell.password === roomData.password){
                addLine(cell.onPassword);
                addButton("sally forth", () => nextRoom());
                return;
            }
            const form = document.createElement("form");
            getContent().appendChild(form);
            const input = document.createElement("input");
            form.appendChild(input);
            input.type = "text";
            input.onchange = (e) => {
                roomData.password = e.target.value;
                }
            form.onsubmit = (e) => {
                e.preventDefault();
                console.log(roomData.password);
                render();
            }
        }
        addLine("points of interest:")
        const options = cell.areas.map(area => {
            return {
                text: area.name,
                func: () => {roomData.area = area.name; render();}
            }
        });
        addOptions(options);
        if (cell.areas.length === 0){addLine("Harry has no points of interest");}
        addLine("doors:");
        addOptions(Object.keys(cell.doors).map(door => {
            let doorName = cell.doors[door].replace("your", globals.name.join(" "));
            return {
                text: `Move ${door} to ${doorName}`,
                func: () => {roomData.currentCell = cell.doors[door]; render();}
            }
        }))
    }
    else{
        const area = cell.areas.find(area => area.name === roomData.area);
        addHeading(area.name);
        addLine(area.desc);
        addButton(area.back, () => {roomData.area = ""; render();});
    }
}
function room4Render(){
    const room = store.rooms[4];
    if (globals.textId === room.pages.length){nextRoom(); return;}
    const page = room.pages[globals.textId];
    addHeading(page.name);
    addLine(page.desc);
    addOptions(page.options.map(option => {
        return {
            text: option,
            func: () => {
                let f, message, prompt;
                if (option === page.correct){
                    f = () => {globals.textId++;render();}
                    message = page.correctText;
                    prompt = "rocking";
                }
                else{
                    f = render;
                    message = page.wrongText;
                    prompt = "well damn"
                }
                clearContent();
                addLine(message);
                addButton(prompt, f);
            }
        }
    }))
}

function room5Render(){
    const room = store.rooms[5];
    const roomData = globals.roomData;
    if (!roomData.node) roomData.node = room.startNode;
    if (!room.nodes[roomData.node]){nextRoom(); return;}
    const node = room.nodes[roomData.node];
    addLine(node.desc);
    addOptions(Object.keys(node.options).map(optionName => {
        return {
            text: optionName,
            func: () => {roomData.node = node.options[optionName];render();}
        }
    }));
}

function fin(){
    addLine("Thanks for playing. Stay safe out there <3");
}

function render(){
    document.getElementById("heading").innerText = store.rooms[globals.roomId].heading;
    clearContent();
    if (globals.roomId === 0) room0Render();
    else if (globals.roomId === 1) room1Render();
    else if (globals.roomId === 2) room2Render();
    else if (globals.roomId === 3) room3Render();
    else if (globals.roomId === 4) room4Render();
    else if (globals.roomId === 5) room5Render();
    else{fin();}
}

window.addEventListener("load", (event) => {
    render();
});