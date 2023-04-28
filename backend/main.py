from flask import Flask, request, jsonify
from translate import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data['text']
    print(text)
    lang_src = "en"
    lang_tgt = "hi"
    translator = Translator(from_lang=lang_src, to_lang=lang_tgt)
    translated_text = translator.translate(text)
    print(translated_text)
    return {'result': translated_text}

if __name__ == '__main__':
    app.run(debug=True)
