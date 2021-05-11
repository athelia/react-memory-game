from Flask import flask

app = Flask()

@app.route('/')
def homepage():
    """Render app."""
