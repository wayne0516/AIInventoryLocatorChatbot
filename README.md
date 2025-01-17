Steps on how it works:
Python version: 3.12.6

1. First, locate into chatbot-deployment and activate the python environment (FrontendAIPytorch)
Alternative: You can create a python environment on your own in the folder and download the following packages:
Package           Version
----------------- ---------
blinker           1.9.0
click             8.1.8
colorama          0.4.6
filelock          3.16.1
Flask             3.1.0
fsspec            2024.12.0
itsdangerous      2.2.0
Jinja2            3.1.5
joblib            1.4.2
MarkupSafe        3.0.2
mpmath            1.3.0
networkx          3.4.2
nltk              3.9.1
numpy             2.2.1
pillow            11.1.0
pip               24.2
regex             2024.11.6
setuptools        75.6.0
sympy             1.13.1
torch             2.5.1
torchvision       0.20.1
tqdm              4.67.1
typing_extensions 4.12.2
Werkzeug          3.1.3

2. Next, run command "python train.py", it will train the AI model to speak like human based on the data ingested from intents.json
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

5. The chatbot is now runnable!"# AIInventoryLocatorChatbot" 
