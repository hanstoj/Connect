from flask import (Flask, render_template, request, flash, session,
                   redirect, url_for)
app = Flask(__name__)
app.secret_key = "dev"


@app.route('/login')
def display_login_page():
    """Display Acct Creation Page"""


if __name__ == '__main__':

    app.run(host='0.0.0.0', debug=True)
