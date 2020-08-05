from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})


@app.route("/")
def judgeBloodTest():
    print("TEO")
    return jsonify({'test': "hello world"})


@app.route("/test")
def helloWorld():
    return "hello world"


@app.route("/board/list")
def board_list():
    conn = pymysql.connect(host="localhost", user="ssafy",
                           password="ssafy", db="itnews", charset="utf8")

    curs = conn.cursor(pymysql.cursors.DictCursor)

    sql = "select b.*, @rownum := @rownum+1 as rnum from board as b, (select @rownum := 0) as r"
    curs.execute(sql)

    rows = curs.fetchall()

    return jsonify(rows)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8080")
