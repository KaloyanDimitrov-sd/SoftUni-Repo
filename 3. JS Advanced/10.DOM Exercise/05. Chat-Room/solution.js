function solve() {
   let button = document.getElementById("send");
   button.addEventListener("click", handler);


   function handler() {
      let myMessage = document.getElementById("chat_input");
      let chatMessages = document.getElementById("chat_messages");
      let newMessage = document.createElement("div");
      newMessage.setAttribute("class", "message my-message");
      newMessage.textContent = myMessage.value;
      chatMessages.appendChild(newMessage);
      myMessage.value = "";
   }
}


