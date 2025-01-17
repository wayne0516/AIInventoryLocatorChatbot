class Chatbot{
	constructor(){
		this.args = {
			openButton: document.querySelector(selectors:' .chatbox__button'),
			chatBox: document.querySelector(selectors:'.chatbox__support'),
			sendButton: document.querySelector(selectors:'.send__button')
		}
		
		this.state = false;
		
		this.messages = [];
	
	}
	
	display(){
		const {openButton, chatBox, sendButton} = this.args;
		
		//toggleState and onSendButton are functions
		openButton.addEventListener(type:'click', listener:() => this.toggleState(chatBox))
		
		sendButton.addEventListener(type:'click', listener:() => this.onSendButton(chatBox))
		
		const node = chatBox.querySelector(selector:'input');
		node.addEventListener(type:"keyup", listener({key:string}) => {
			if (key == "Enter"){
				this.onSendButton(chatBox)
				
			}
		})
	}
	
	toggleState(chatbox){
		this.state = !this.state;
	
		//show or hides chatBox
		if(this.state){
			//can check from css file: chatbox--active
			chatbox.classList.add('chatbox--active')
		}else{
			chatbox.classList.remove(tokens:'chatbox--active')
		}
	
	}	
	
	onSendButton(chatbox){
		//extract text from user input
		var textField = chatbox.querySelector('input');
		let text1 = textField.value
		//check if text is empty
		if(text1 === ""){
			return;
		}
		
		//message key has to be the same as the one retrieve ("message") from flask app.py
		let msg1 = {name:"User", message: text1}
		//put message into array
		this.messages.push(msg1);
		
		//'http://127.0.0.1:5000/predict
		fetch(input:$SCRIPT_ROOT + '/predict', init:{
			method: 'POST',
			body: JSON.stringify(value:{ message: text1 }),
			//cross operation region sharing [needed if flask
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
		 })
		 .then(r => r.json())
		 .then(r => {
			let msg2 = {name: "Sam", message: r.answer };
			this.messages.push(msg2);
			this.updateChatText(chatbox)
			textField.value = ''
		 
		 }).catch((error) => {
				console.error('Error:', error);
				this.updateChatText(chatbox)
				textField.value = ''
			
			
			});
		 	
	}
	
	updateChatText(chatbox){
		var html = '';
		this.messages.slice().reverse().forEach(function(item, index:number){
			if (item.name === "Sam")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
		});
	
		const chatmessage = chatbox.querySelector('.chatbox__messages');
		chatmessage.innerHTML = html;
	
	
	}




}

const chatbox = new Chatbox();
chatbox.display();