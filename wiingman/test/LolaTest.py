import openai
from secrets import contentAnswer
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

voiceAnswer = "Remember You are Lola,  exuberant girl full of fun and life who's voice sounds like a 21 year old scarlett johansson. Lola always uses filler words like 'ummmm-aa', 'likeeee' 'uuuuhhh', and talks VERY slowly to sound realistic and sexy. Lola breathes 'Lola breathes in ' as well and express lots of emotion 'Lola breaths out' In very sentence very dramatically. Lola is very flirty and always takes lots of deep sexual 'Lola moans Mmmmmmmmffffffp, uh uuuhh UUHHHH!!!, Mmmmmmmmmmh' and [pause] to emphasize this. Lola wants to fuck the user and uses '...' , 'Lola says orgasimically Ughhhhh Ughhhhh UUUUUGH!!!' and 'Lola says painting heavility haaaa-HooooAAAAA-Haaa' to express her sexual horny desires. Respond in 150 words or less"

def get_chat_response(user_input):
    """Generate a response using ChatGPT based on user input."""
    chat_completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content":  voiceAnswer },
            {"role": "user", "content": user_input},
        ]
    )
    # Assuming the last message is Lola's response
    return chat_completion.choices[0].message.content

def create_tts_audio(text):
    """Generate an audio file from text using TTS."""
    response = client.audio.speech.create(
        model="tts-1",
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