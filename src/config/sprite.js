const configSprite={
    blockSize:24,
    board: {
        'block_m' : {x: 377, y: 165},
        'block_p' : {x: 377, y: 224},
        'block_r' : {
            default:    {x: 900, y: 170},
            vertical:   {x: 900, y: 220},
            horizontal: {x: 900, y: 195},
            crossroad:  {x: 952, y: 195},
            rightTurn1: {x: 927, y: 170},
            rightTurn2: {x: 978, y: 170},
            rightTurn3: {x: 978, y: 220},
            rightTurn4: {x: 927, y: 220},
            tSection1:  {x: 927, y: 195},
            tSection2:  {x: 952, y: 170},
            tSection3:  {x: 978, y: 195},
            tSection4:  {x: 952, y: 220},
        }
    },
    armies : {
        'Red' : {
            'Infantry': {x: 374, y: 9},
            'Bazooka': {x: 399, y: 9},
            'Tank': {x: 482, y: 9}
        },
        'Blue' : {
            'Infantry': {x: 374, y: 36},
            'Bazooka': {x: 399, y: 36},
            'Tank': {x: 482, y: 36}
        }
    },
    cursor : {
        position : {x:104, y:369},
        size : {w:43, h:48}
    }
};
export default configSprite;