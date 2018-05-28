const SPACE_INVADER_STAGES = [
    {
        speed: 50,
        aggro: 0.1,
        objects: {
            aliens: {
                perRow: 10,
                step: 55,
                w: 50,
                h: 50,
                types: [
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 50,
                h: 50,
                count: 1,
                bulletMax: 8
            }
        }
    },
    {
        speed: 30,
        aggro: 0.1,
        objects: {
            aliens: {
                perRow: 10,
                step: 55,
                w: 50,
                h: 50,
                types: [
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 50,
                h: 50,
                count: 1,
                bulletMax: 7
            }
        }
    },    
    {
        speed: 45,
        aggro: 0.1,
        objects: {
            aliens: {
                perRow: 11,
                step: 55,
                w: 45,
                h: 45,
                types: [
                    2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2,
                    1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 50,
                h: 50,
                count: 1,
                bulletMax: 7
            }
        }
    },    
    {
        speed: 45,
        aggro: 0.1,
        objects: {
            aliens: {
                perRow: 12,
                step: 55,
                w: 40,
                h: 40,
                types: [
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 35,
                h: 35,
                count: 1,
                bulletMax: 6
            }
        }
    },       
    {
        speed: 45,
        aggro: 0.1,
        objects: {
            aliens: {
                perRow: 12,
                step: 55,
                w: 40,
                h: 40,
                types: [
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 35,
                h: 35,
                count: 1,
                bulletMax: 6
            }
        }
    },     
    {
        speed: 40,
        aggro: 0.1,
        objects: {
            aliens: {
                perRow: 10,
                step: 55,
                w: 35,
                h: 35,
                types: [
                    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 25,
                h: 25,
                count: 1,
                bulletMax: 5
            }
        }
    },     
    {
        speed: 40,
        aggro: 0.1,
        objects: {
            aliens: {
                perRow: 13,
                step: 55,
                w: 35,
                h: 35,
                types: [
                    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                    3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3,
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 25,
                h: 25,
                count: 1,
                bulletMax: 5
            }
        }
    },
    {
        speed: 60,
        aggro: 0.2,
        objects: {
            aliens: {
                perRow: 15,
                step: 30,
                w: 25,
                h: 25,
                types: [
                    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            defenders: {
                lifes: 5,
                speed: 5,
                w: 15,
                h: 15,
                count: 1,
                bulletMax: 3
            }
        }
    }
];
