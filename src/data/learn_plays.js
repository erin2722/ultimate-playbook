import play_moves from "./play_moves";

const plays = [
    {
        id: "1",
        name: "Vertical Stack",
        img: "https://ui-design-final.s3.amazonaws.com/vert-stack.png",
        description: `One by one, the receivers make their runs for a pass (cuts). For each 
            receiver to have an open space to cut into, the other five receivers have to stay out of the way. 
            Knowing who will cut and who will stay requires the players to have a good awareness of one another. 
            The simplest way of cutting is for the person on the front of the stack to cut first, and then the 
            second and so on until the disc is received.`,
        faqs: [
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            }
        ],
        play_moves: play_moves["Vertical Stack"]
    },
    {
        id: "2",
        name: "Horizontal Stack",
        img: "https://ui-design-final.s3.amazonaws.com/horizontal-stack.png",
        description: `Instead of setting up in a vertical line (the vertical stack), the Horizontal Stack 
            (a.k.a ‘ho stack’) has two horizontal lines, 3 handlers and 4 receivers up field. This creates passing 
            space in front and behind the receivers.`,
        faqs: [
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            }
        ],
        play_moves: play_moves["Horizontal Stack"]
    },
    {
        id: "3",
        name: "Endzone Offense",
        img: "https://ui-design-final.s3.amazonaws.com/endzone.png",
        description: `This play is used when we are close to the endzone. The 'iso' cuts away from the stack,
            which is situated at the back of the endzone. This gives them space to recieve the disc in a 
            relatively tight area. Make sure to indicate who the 'iso' is as you set up this play.`,
        faqs: [
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            }
        ],
        play_moves: play_moves["Endzone Offense"]
    },
    {
        id: "4",
        name: "Side Stack",
        img: "https://ui-design-final.s3.amazonaws.com/side-stack.png",
        description: `The side stack is very similar to a vertical stack, but it is set up on the
            side of the field to leave more space in the middle. The first cutter can either cut 
            deep on cut in towards the handlers.`,
        faqs: [
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            }
        ],
        play_moves: play_moves["Side Stack"]
    },
    {
        id: "5",
        name: "Scallywag",
        img: "https://ui-design-final.s3.amazonaws.com/scallywag.png",
        description: `Scallywag allows us to open up space for a regular cut or for a deep cut. The
            back of the stack cuts in to either the open or the break side. The next person in 
            the stack cuts in to the opposite side. Third in the stack cuts deep as a continue 
            cut or deep look.
        `,
        faqs: [
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            },
            {
                question: "Why is this useful?",
                answer: "It organizes players to make sure one person has space to recieve the disc."
            }
        ],
        play_moves: play_moves["Scallywag"]
    }
];

export default plays;