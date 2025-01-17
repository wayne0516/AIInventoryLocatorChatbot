Steps on how it works:
Python version: 3.12.6

1. First, create a folder to store the folders/files of the project
2. Then, create a python environment 
   python -m venv venv
   venv\Scripts\activate
   
4. After that, in the folder and download the following packages
   pip install Flask torch torchvision nltk

3. Next, run the command "python train.py", it will train the AI model to speak like human based on the data ingested from intents.json
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

3. Once the training is done, it will generate a .pth file which is the AI model.

4. Lastly is to run the command "python app.py" and open the local host (http://127.0.0.1:5000 for me)

5. The chatbot is now runnable!
