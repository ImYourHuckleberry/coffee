from flask import Flask, request, Response
from bson.json_util import dumps, loads
from flask_cors import CORS
from mongo_functions import get_user, insert_user, get_all, update_user


app = Flask(__name__)
CORS(app)

# get user by obj_id
@app.route('/test', methods=['GET'])
def test_api():
    data = "Success"
    response = Response(data, status=200, mimetype='application/json')
    return response

# get user by obj_id
@app.route('/users', methods=['GET'])
def get_all_api():
    data = get_all()
    response = Response(data, status=200, mimetype='application/json')
    return response



# get user by obj_id
@app.route('/users/<string:_id>', methods=['GET'])
def getuser_api(_id):
    response_data = get_user(_id)
    if "error" not in response_data:
        response = Response(response_data, status=200, mimetype='application/json')
        return response
    else:
        response = Response("", status=404, mimetype='application/json')
        return response

# insert_user FIX THIS
@app.route("/users", methods=['POST'])
def insert_user_api():
    request_data = request.get_json()
    response_data = insert_user(request_data)
    if 'error' not in response_data:
        response = Response("Insert Success", status=201, mimetype='application/json')
        return response
    else:
        response = Response(dumps(response_data), 200, mimetype='application/json')
        return response

@app.route('/users/<string:_id>', methods=['PUT'])
def update_user_api(_id):
    request_data = request.get_json()
    response_data = update_user(_id, request_data)
    if 'error' not in response_data:
        response = Response(dumps(response_data), status=200, mimetype='application/json')
        return response
    else:
        response = Response(dumps(response_data), 400, mimetype='application/json')
        return response

app.run(host='0.0.0.0', port=5000)