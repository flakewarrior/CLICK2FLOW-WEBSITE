document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("chatbot-container");
  container.innerHTML = `
    <div id="chatbot-header">Click2Flow Assistant</div>
    <div id="chatbot-messages"></div>
    <div id="chatbot-input">
      <input type="text" id="chatbot-text" placeholder="Ask about services...">
      <button id="chatbot-send">Send</button>
    </div>
  `;

  const messages = document.getElementById("chatbot-messages");
  const input = document.getElementById("chatbot-text");
  const sendBtn = document.getElementById("chatbot-send");

  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.textContent = sender + ": " + text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener("click", () => {
    const userText = input.value.trim();
    if (!userText) return;
    addMessage("You", userText);
    input.value = "";

    if (/service|huduma/i.test(userText)) {
      addMessage("Bot", "We offer automation services: Chatbots, Booking, Payments, Notifications.");
    } else if (/price|bei/i.test(userText)) {
      addMessage("Bot", "Our setup fee is TSh 250,000–500,000. Monthly service TSh 50,000–120,000.");
    } else if (/contact|wasiliana/i.test(userText)) {
      addMessage("Bot", "WhatsApp: +255 XXX XXX XXX | Email: info@click2flow.co.tz");
    } else {
      addMessage("Bot", "Samahani, tafadhali uliza kuhusu huduma, bei, au mawasiliano.");
    }
  });

  // Toggle button
  const toggleBtn = document.getElementById("chatbot-toggle");
  toggleBtn.addEventListener("click", ()
