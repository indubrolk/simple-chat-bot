const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");

const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

const handleOutgoingMessage = (userMessage) => {
    const messageContent = '<div class="message-text">${userMessage}</div>';
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoingMessageDiv);
}

//Handle Enter key press for sending messages

messageInput.addEventListener("keydown", (e) => {
   const userMessage = e.target.value.trim();
   if (e.key === "Enter" && userMessage){
       handleOutgoingMessage(userMessage);
   }
});

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage())