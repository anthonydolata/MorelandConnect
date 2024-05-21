import speech_recognition as sr
import pyttsx3
from transformers import pipeline

# Initialize the speech recognition and synthesis engines
recognizer = sr.Recognizer()
speech_engine = pyttsx3.init()

# Load a pre-trained language model for conversational AI (using Hugging Face's transformers)
chatbot = pipeline("conversational", model="microsoft/DialoGPT-medium")

def recognize_speech():
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio)
            print(f"Recognized: {text}")
            return text
        except sr.UnknownValueError:
            print("Sorry, I could not understand the audio.")
            return None
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            return None

def speak_text(text):
    speech_engine.say(text)
    speech_engine.runAndWait()

def chat_with_ai(user_input):
    response = chatbot(user_input)
    return response[0]['generated_text']

if __name__ == "__main__":
    print("Welcome to the Talking AI!")
    speak_text("Hello, how can I help you today?")
    
    while True:
        user_input = recognize_speech()
        if user_input:
            response_text = chat_with_ai(user_input)
            print(f"AI: {response_text}")
            speak_text(response_text)
        else:
            speak_text("I didn't catch that. Can you please repeat?")
