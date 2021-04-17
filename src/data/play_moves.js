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
    },
    "Horizontal Stack": {
        players: [
            {
                initialTop: 12,
                initialLeft: 5,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: true
            },
            {
                initialTop: 12,
                initialLeft: 12,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 12,
                initialLeft: 18,
                moves: [
                    {
                        top: 25,
                        left: 18
                    }
                ],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 12,
                initialLeft: 25,
                moves: [
                    {
                        top: 2,
                        left: 25
                    }
                ],
                firstMover: true,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 30,
                initialLeft: 5,
                moves: [],
                firstMover: false,
                hasDisc: true,
                getsDisc: false
            },
            {
                initialTop: 33,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 30,
                initialLeft: 25,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            }
            
        ],
        discMove: [4, 3]
    },
    "Endzone Offense": {
        players: [
            {
                initialTop: 0,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: true
            },
            {
                initialTop: 2.25,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 4.5,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 6.75,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 9,
                initialLeft: 15,
                moves: [
                    {
                        top: 2,
                        left: 25
                    }
                ],
                firstMover: true,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 20,
                initialLeft: 15,
                moves: [],
                firstMover: false,
                hasDisc: true,
                getsDisc: false
            },
            {
                initialTop: 23,
                initialLeft: 5,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            }
            
        ],
        discMove: [5, 4]
    },
    "Side Stack": {
        players: [
            {
                initialTop: 12,
                initialLeft: 2,
                moves: [
                    {
                        top: 18,
                        left: 17
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
                initialTop: 15,
                initialLeft: 2,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 18,
                initialLeft: 2,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 21,
                initialLeft: 2,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 24,
                initialLeft: 2,
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
    },
    "Scallywag": {
        players: [
            {
                initialTop: 14,
                initialLeft: 12,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: true
            },
            {
                initialTop: 14,
                initialLeft: 18,
                moves: [],
                firstMover: false,
                hasDisc: false,
                getsDisc: false
            },
            {
                initialTop: 16,
                initialLeft: 15,
                moves: [
                    {
                        top: 3,
                        left: 18
                    }
                ],
                firstMover: true,
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
        discMove: [6, 2]
    }
};

export default play_moves;