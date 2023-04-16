from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def home():
    return 'Welcome to the Movie Search App!'

@app.route('/recommendations', methods=['GET'])
def recommend():
    movie_title = request.args.get('title')
    # get index of movie
    idx = indices[movie_title]
    # get cosine similarity scores for all movies
    sim_scores = list(enumerate(cosine_sim[idx]))
    # sort scores in descending order
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    # get top 10 most similar movies
    sim_scores = sim_scores[1:11]
    # get movie titles and return as list
    movie_indices = [i[0] for i in sim_scores]
    recommended_movies = movies['title'].iloc[movie_indices].tolist()
    return jsonify({'status': 'success', 'message': 'Movie recommendations', 'recommendations': recommended_movies})



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