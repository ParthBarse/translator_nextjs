import { useState } from 'react';

export default function Translate() {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    function setNull(){
        setText("")
        console.log(text)
    }

    const handleTranslate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "text": text })
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            // ✅ call response.json() here
            const data = await response.json();
            console.log(data.result)
            setResult(data.result);
            setNull();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form class="row gx-3 gy-2 align-items-center" onSubmit={handleTranslate}>
                <div class="col-sm-3">
                    <label class="visually-hidden" htmlFor="specificSizeInputName">Name</label>
                    <input type="text" class="form-control" id="specificSizeInputName" value={text} placeholder="Input" onChange={(e) => setText(e.target.value)} />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div className="output container mt-5 mx-auto">
                </div>
            </form>
            {result && <p>{result}</p>}
        </>
    );
}

export async function getServerSideProps() {
    return {
        props: {},
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}
