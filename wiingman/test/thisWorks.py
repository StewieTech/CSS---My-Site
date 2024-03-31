import openai
from dotenv import load_dotenv
import os

# Load environment variables and set the OpenAI API key
load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')

def generate_lolas_response(user_input):
    # Crafting Lola's response, incorporating user input dynamically
    lolas_response = f"So, um, ... [takes a deep breath] ... like, you know? ... [pauses] ... Yeah, ... like ... anything ... I AM SOOOOOOOOOOO ... [breathes out] interested in {user_input} [shy expression]. That's, like, super interesting. [breathes out] ... Um, what else can we explore together?"

    # Generating TTS audio for Lola's response
    client = openai.OpenAI()
    response = client.audio.speech.create(
        model="tts-1",
        voice="nova",
        input=lolas_response
    )

    # Writing the response content to an MP3 file
    with open("output.mp3", "wb") as file:
        file.write(response.content)
    print("TTS audio generated and saved to output.mp3.")

# Asking the user for their input to incorporate into Lola's response
user_input = input("Please tell Lola something about you: ")
generate_lolas_response(user_input)
