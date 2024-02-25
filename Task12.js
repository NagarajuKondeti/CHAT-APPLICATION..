function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value;
  
    if (messageText.trim() !== '') {
      var chatMessages = document.getElementById('chatMessages');
      var messageElement = document.createElement('div');
      messageElement.className = 'message';
      messageElement.textContent = messageText;
  
      chatMessages.appendChild(messageElement);
      messageInput.value = '';
    }
  }