import axios from 'axios';
import React, { useState } from 'react';

//---- Pages
// import Home from './pages/home/User';

function Routes() {
    const [data, setData] = useState<object>({});
    const [title, setTitle] = useState<string>();
    const [subtitle, setSubtitle] = useState<string>();
    const [text, setText] = useState<string>();
    const [color, setColor] = useState<string>();
    const [idToDo, setIdToDo] = useState<string>();

    async function createToDo(): Promise<void> {
        const response = await axios.post('/api/to-do', {
            title,
            subtitle,
            text,
            idUser: 1,
            color,
        });
        console.log(await response.data._id);
        // setData(await response.data)
        return;
    }

    async function getToDo(): Promise<void> {
        const url = '/api/to-do/' + idToDo + '/?idUser=1';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // if(await response.status !== 200) return;
        const dat = await response.json()
        setData(dat);
        return;
    }

    async function putToDo(): Promise<void> {
        const url = '/api/to-do/' + idToDo + '/?idUser=1';
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, subtitle, color, text}),
        });
        // if(await response.status !== 200) return;
        const dat = await response.json()
        setData(dat['message']);
        return;
    }

    async function deleteToDo(): Promise<void> {
        const url = '/api/to-do/' + idToDo + '/?idUser=1';
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const dat = await response.json()
        setData(dat['message']);
        return;
    }

    return (
        <div>
            <h1>teste: {JSON.stringify(data)}</h1>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Subtitle"
                />
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Text"
                />
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Color"
                />

                <button onClick={async () => await createToDo()}>
                    Criar To-Do
                </button>
            </div>
            <div>
                <input
                    type="text"
                    value={idToDo}
                    onChange={(e) => setIdToDo(e.target.value)}
                    placeholder="Id ToDo"
                />

                <button onClick={async () => await getToDo()}>
                    Pegar To-Do
                </button>
            </div>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Subtitle"
                />
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Text"
                />
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Color"
                />

                <input
                    type="text"
                    value={idToDo}
                    onChange={(e) => setIdToDo(e.target.value)}
                    placeholder="Id ToDo"
                />

                <button onClick={async () => await putToDo()}>
                    Atualizar To-Do
                </button>
            </div>
            <div>
                <input
                    type="text"
                    value={idToDo}
                    onChange={(e) => setIdToDo(e.target.value)}
                    placeholder="Id ToDo"
                />

                <button onClick={async () => await deleteToDo()}>
                    Apagar To-Do
                </button>
            </div>
        </div>
    );
}

export default Routes;
