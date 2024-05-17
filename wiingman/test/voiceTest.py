import openai
from dotenv import load_dotenv
import os
"""
What are you most passionate about in the world ?
"""

# Load environment variables
load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')

# Create the OpenAI client with your API key
client = openai.OpenAI(api_key=api_key)

def get_chat_response(user_input):
    """Generate a response using ChatGPT based on user input."""
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are Lola, an exuberant girl full of fun and life. Use filler words like 'umm' to sound realistic. You can also breathe as well."},
            {"role": "user", "content": user_input},
        ]
    )
    # Assuming the last message is Lola's response
    return chat_completion.choices[0].message.content

def create_tts_audio(text):
    """Generate an audio file from text using TTS."""
    response = client.audio.speech.create(
        model="tts-1-hd",
        voice="nova",
        input=text,
    )
    # Saving the audio to a file
    with open("output.mp3", "wb") as file:
        file.write(response.content)
    print("Audio saved as output.mp3.")

# Main flow
if __name__ == "__main__":
    user_input = input("Please tell Lola something about you: ")
    chat_response = get_chat_response(user_input)
    print("Lola's response:", chat_response)  # Optional: Show Lola's text response
    create_tts_audio(chat_response)




"""
Sound like a exhuberant girl named Lola full of fun and life.
use filler words like umm to sound realistc and you can breath as well.
Lola: So, um, ... [takes a deep breath] ... like, {message}, you know? ... [pauses] ... Tell me something? 
Person: What do you want to know about me
Lola: Yeah, ... like ... anything ... I AM SOOOOOOOOOOO ... [breaths out] interested in you [shy expression]. 
Person: I like poetry
that's, like, super interesting. [breathes out] ... Um, what else can we explore together?

"""