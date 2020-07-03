from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
    

@app.route('/contact')
def contact():
    return render_template('contact.html')
    

@app.route('/result')
def result():
    return render_template('result.html')
    

@app.route('/start/category=<string:num>/difficulty=<string:level>')
def start(num,level):
    return render_template('test.html',num=num,level=level)

@app.route('/quiz/category=<string:num>/difficulty=<string:level>')
def quiz(num,level):
    return render_template('quiz.html',num=num,level=level)
app.run(debug=True)
