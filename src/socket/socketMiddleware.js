const socketIO = socket => () => next => action => {
    if (action.meta && action.meta.socket) {
        socket.emit(action.type, action.payload);
    }

    return next(action);
};

export default socketIO;