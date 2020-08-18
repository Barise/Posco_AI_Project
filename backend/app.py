from flask import Flask, flash, request, redirect, url_for, session, jsonify, render_template
from flask_cors import CORS, cross_origin
import pymysql
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = 'C:\\Users\\PIAI\\Desktop\\AI_Project\\Posco_AI_Project\\backend\\images'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


cors = CORS(app, resources={r"*": {"origins": "*"}})
conn = pymysql.connect(host="localhost", user="root",
                       password="root", db="popang", charset="utf8")
curs = conn.cursor(pymysql.cursors.DictCursor)

@app.route("/")
def hello():
    print("hello world")
    return jsonify({"TEO":"hello"})

@app.route('/upload', methods=['POST'])
def fileUpload():
    target = os.path.join(app.config['UPLOAD_FOLDER'], 'test')
    if not os.path.isdir(target):
        os.mkdir(target) 
    # logger.info("welcome to upload`")
    file = request.files['file']
    filename = secure_filename(file.filename)
    destination = "/".join([target, filename])
    file.save(destination)
    session['uploadFilePath'] = destination
    
    response = "이미지가 업로드 되었습니다."
    return response

@app.route("/product/list")
def product_list():
    sql = "select * from product"
    curs.execute(sql)
    rows = curs.fetchall()
    print(jsonify(rows))
    return jsonify(rows)

@app.route("/pod/list")
def pod_list():
    sql = "select * from pod order by emptinessScore"
    curs.execute(sql)
    rows = curs.fetchall()
    return jsonify(rows)

@app.route("/stock/falselist")
def stock_falseList():
    sql = "select * from falselist"
    curs.execute(sql)
    rows = curs.fetchall()
    return jsonify(rows)

@app.route("/stock/truelist")
def stock_trueList():
    sql = "select * from truelist"
    curs.execute(sql)
    rows = curs.fetchall()
    return jsonify(rows)

if __name__ == '__main__':
    app.secret_key = os.urandom(24)
    app.run(host="127.0.0.1", port="8000")
