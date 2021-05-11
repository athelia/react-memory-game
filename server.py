from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def homepage():
    """Render app."""
    return render_template('app.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5003')