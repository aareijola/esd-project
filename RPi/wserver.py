from flask import Flask, redirect, render_template, jsonify, Response
import db
import hike
import json

app = Flask(__name__)
hdb = db.HubDatabase()


@app.route("/")
def get_home():
    sessions = hdb.get_sessions()
    data = hdb.calculate_values() #data for summary
    return render_template(
        "home.html",
        sessions=sessions,
        data=data,
        data_json=json.dumps(
            list(map(lambda s: hike.to_list(s), sessions))
        ),  # forgive me
    )


@app.route("/sessions")
def get_sessions():
    sessions = hdb.get_sessions()
    sessions = list(map(lambda s: hike.to_list(s), sessions))
    print(sessions)
    return jsonify(sessions)


@app.route("/sessions/<id>")
def get_session_by_id(id):
    session = hdb.get_session(id)
    return jsonify(hike.to_list(session))


@app.route("/sessions/<id>/delete", methods=["POST"])
def delete_session(id):
    hdb.delete(id)
    print(f"DELETED SESSION WITH ID: {id}")
    return Response(status=202)
    # return redirect("/", code=200)


@app.route("/sessions/ADD_ONE")
def add_one_session():
    # quick and dirty function to add one entry to DB
    hdb.add_one_entry()
    return Response(status=201)


if __name__ == "__main__":
    app.run("0.0.0.0", debug=True)
