const SEND_MESSAGE = 'social-network/dialogs/SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vitalik'},
        {id: 2, name: 'Grigori'},
        {id: 3, name: 'Anya'},
        {id: 4, name: 'Feliks'},
        {id: 5, name: 'Kliment'},
        {id: 6, name: 'Boris'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your It-Kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;