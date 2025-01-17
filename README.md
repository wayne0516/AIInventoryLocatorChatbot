Steps on how it works:
Python version: 3.12.6

1. First, create a folder to store the folders/files of the project

2. Then, create a python environment: 
2.1 "python -m venv venv"
2.2 "venv\Scripts\activate"
   
3. After that, in the folder and download the following packages
3.1 "pip install Flask torch torchvision nltk"

4. Next, run the command "python train.py", it will train the AI model to speak like human based on the data ingested from intents.json
How it works, for example:
"tag": "greeting",
      "patterns": [
        "Hi",
        "Hey",
        "How are you",
        "Is anyone there?",
        "Hello",
        "Good day"
      ],
      "responses": [
        "Hey :-)",
        "Hello, thanks for visiting",
        "Hi there, what can I do for you?",
        "Hi there, how can I help?"
      ]

It will train based on the tags, when the user says the words from the following patterns, it will gather them then generate the responses based on it.

5. Once the training is done, it will generate a .pth file which is the AI model.

6. Lastly is to run the command "python app.py" and open the local host (http://127.0.0.1:5000 for me)

7. The chatbot is now runnable!

8. Following Prompts to try:
8.1 "Where is the motherboard?", "M.2?", "Where's the power supply?"
