import {socketConnected, socketDisconnected} from '../actions/connectionActions'

export default class SocketHandler {
    constructor(socket, store) {
        this.socket = socket
        this.store = store

        //bind handlers to this
        this.onConnect = this.onConnect.bind(this)
        this.onDisconnect = this.onDisconnect.bind(this)

        //bind handlers to socket
        socket.on('connect', this.onConnect)
        socket.on('disconnect', this.onDisconnect)
    }

    onConnect() {
        this.store.dispatch(socketConnected())
    }

    onDisconnect() {
        this.store.dispatch(socketDisconnected())
    }
}