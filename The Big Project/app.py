from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# @app.route('/')
# def index():
#     return 'Hello, world!'


@app.route('/search', methods=['GET'])
def search():
    movie_title = request.args.get('title')
    # API call to check if movie is available on Netflix
    response = requests.get(f'https://unogsng.p.rapidapi.com/search?query={movie_title}&limit=1', headers={
        'X-RapidAPI-Host': 'unogsng.p.rapidapi.com',
        'X-RapidAPI-Key': 'c241c78d80mshd947881db360f8fp1bb9c2jsneb06997d8644'
    })
    data = response.json()
    if len(data['results']) > 0:
        # movie is available on Netflix
        return jsonify({'status': 'success', 'message': 'Movie is available on Netflix'})
    else:
        # movie is not available on Netflix
        # return similar movie recommendations
        return jsonify({'status': 'failure', 'message': 'Movie is not available on Netflix'})

if __name__ == '__main__':
    app.run(debug=True)

# python3 -m flask run