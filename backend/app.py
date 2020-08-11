from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
import pymysql

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})


@app.route("/")
def my_index():
    print("route")
    return flask.render_template("index.html", token="Hello Flask+React")


@app.route("/teo")
def judgeBloodTest():
    print("TEO")
    return jsonify({'test': "hello world"})


@app.route("/test")
def helloWorld():
    return "hello world"


@app.route("/binlist")
def board_list():
    conn = pymysql.connect(host="localhost", user="root",
                           password="root", db="popang", charset="utf8")

    curs = conn.cursor(pymysql.cursors.DictCursor)
    # sql = "select b.*, @rownum := @rownum+1 as rnum from board as b, (select @rownum := 0) as r"

    sql = "select * from bin"
    curs.execute(sql)

    rows = curs.fetchall()
    print(rows)
    return jsonify(rows)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8000")
