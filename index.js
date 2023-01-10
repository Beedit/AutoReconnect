let server = ""

register("serverConnect", (...args) => {
    setTimeout(() => server = Server.getIP(), 5000)
})

register("serverDisconnect", (...args) => {
    setTimeout(() => Client.connect(server), 7000)
})