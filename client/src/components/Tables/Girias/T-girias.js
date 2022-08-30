import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './T-girias.css'

function Tgirias() {

    const [word, setWord] = useState("");
    const [newWord, setNewWord] = useState("");
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
            setWordList(response.data)
        })
    }, [])

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", { word: word });
        window.location.reload();
    };

    const updateWord = (id) => {
        Axios.put("http://localhost:3001/update", { id: id, newWord: newWord })
        window.location.reload();
    };

    const deleteWord = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
        window.location.reload();
    };

    return (
        <div className="App">

            <h1 className='title'>Girias</h1>
            <div className='tgirias'>

                <div className='add'>
                    <input
                        className='change-add'
                        type="text"
                        placeholder='Adicionar palavra:'
                        onChange={(event) => {
                            setWord(event.target.value)
                        }}
                    />
                    <button className='add-but' onClick={addToList}>ADICIONAR</button>
                </div>

                {wordList.map((val, key) => {
                    return <div key={key} className="word">
                        <h1 className='palavra'>{val.word}</h1>
                        <div className='teste'>
                            <input type="text"
                                className='change-txt'
                                placeholder='Escreva a palavra aqui'
                                onChange={(event) => {
                                    setNewWord(event.target.value)
                                }}
                            />
                            <div className='buttons'>
                                <button className='update-but' onClick={() => updateWord(val._id)}>ALTERAR</button>
                                <button className='word-but' onClick={() => deleteWord(val._id)}>DELETAR</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Tgirias;