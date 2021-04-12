const play_moves = {
    "Vertical Stack": {
        players: [
            {
                initialTop: 10,
                initialLeft: 15,
                moves: [
                    {
                        top: 15,
                        left: 25
                    },
                    {
                        top: 25,
                        left: 15
                    }
                ],
                firstMover: true,
                hasDisc: false,
                getsDisc: true
            },
            {
                initialTop: 13,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 16,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 19,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 22,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 33,
                initialLeft: 9,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 30,
                initialLeft: 19,
                moves: [],
                firstMover: false,
                hasDisc: true,
                getsDisc: false
            }
        ],
        discMove: [6, 0]
    }
};

export default play_moves;