from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
import pymysql

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
conn = pymysql.connect(host="localhost", user="root",
                       password="root", db="popang", charset="utf8")

curs = conn.cursor(pymysql.cursors.DictCursor)


@app.route("/product/list")
def product_list():
    # sql = "select b.*, @rownum := @rownum+1 as rnum from board as b, (select @rownum := 0) as r"
    sql = "select * from product"
    curs.execute(sql)
    rows = curs.fetchall()
    return jsonify(rows)


@app.route("/product/searchlist")
def product_Search_List():
    # sql = "select b.*, @rownum := @rownum+1 as rnum from board as b, (select @rownum := 0) as r"
    sql = "select * from product"
    curs.execute(sql)
    rows = curs.fetchall()
    return jsonify(rows)


@app.route("/pod/list")
def pod_list():
    # sql = "select b.*, @rownum := @rownum+1 as rnum from board as b, (select @rownum := 0) as r"
    sql = "select * from pod"
    curs.execute(sql)
    rows = curs.fetchall()
    return jsonify(rows)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8000")
