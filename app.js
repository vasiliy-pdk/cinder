let socket = new Phoenix.Socket(
  'ws://veeqo-notifications.herokuapp.com/socket',
  {params: {token: window.userToken}}
);

socket.connect()

let channel = socket.channel("notifications:4578", { "authentication_token": 'abcdefgh' })
channel.join()
  .receive("ok", response => { console.log("Joined successfully", response) })
  .receive("error", response => { console.log("Unable to join", response) })

channel.on("show-and-die-notification", payload => {
    console.log("[show-and-die]: ", payload)
})

channel.on("permanent-notification", payload => {
    console.log("[permanent]: ", payload)
})

channel.push("debug", "send-me-show-and-die-notification")
channel.push("debug", "send-me-permanent-notification")
