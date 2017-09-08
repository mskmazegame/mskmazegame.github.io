export const ScreenId = {
    START: 'start',
    STORY_1: 'story-1',
    MAZE_1: 'maze-1',
    STORY_2: 'story-2',
    MAZE_2: 'maze-2',
};

export const MazeId = {
    MAZE_1: 'maze-1',
    MAZE_2: 'maze-2'
};

export const MAZE_MATRIX_1 = [
    [
        [{right: 1}, {top: 1, right: 1, bottom: 1, left: 1}, {left: 1}],
        [{right: 1, bottom: 1}, {top: 1, right: 1, left: 1}, {left: 1, bottom: 1}],
        [{top: 1}, {right: 1, bottom: 1}, {top: 1, left: 1}]
    ],
    [
        [{right: 1, bottom: 1}, {top: 1, right: 1, left: 1}, {left: 1, bottom: 1}],
        [{top: 1, bottom: 1}, {right: 1, bottom: 1}, {top:1, left: 1, bottom: 1}],
        [{top: 1}, {top: 1, bottom: 1}, {top: 1}]
    ]
];

export const MAZE_MATRIX_2 = [
    [{right: 1}, {top: 1, right: 1, bottom: 1, left: 1}, {left: 1}],
    [{right: 1, bottom: 1}, {top: 1, right: 1, left: 1}, {left: 1, bottom: 1}],
    [{top: 1}, {right: 1, bottom: 1}, {top: 1, left: 1}]
];

export const MazeSettings = {
    MAZE_1: {
        id: MazeId.MAZE_1,
        defaultPosition: {x: 1, y: 0},
        matrix: MAZE_MATRIX_1
    },
    MAZE_2: {
        id: MazeId.MAZE_2,
        defaultPosition: {x: 1, y: 0},
        matrix: MAZE_MATRIX_2
    }
};

export const KeyCode = {
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37
};

export const ScreenSettings = {
    SCREEN_START: {
        id: ScreenId.START
    },
    SCREEN_STORY_1: {
        id: ScreenId.STORY_1
    },
    SCREEN_MAZE_1: {
        id: ScreenId.MAZE_1,
        mazeSettings: MazeSettings.MAZE_1
    },
    SCREEN_STORY_2: {
        id: ScreenId.STORY_2
    },
    SCREEN_MAZE_2: {
        id: ScreenId.MAZE_2
    }
};