"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from 'react';

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if(addField.trim() === '') return false;

    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    });
    setAddField('');
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
      <div className="max-w-2xl mx-auto flex rounded-md bg-gray-900 border border-gray-400 p-4 my-4">
        <input 
        type="text"
        className=" flex-1 rounded-md border border-white p-3 bg-transparent text-white outline-none"
        placeholder="Digite um item"
        value={addField}
        onChange={e => setAddField(e.target.value)}
        />
        <button
        className="p-4"
        onClick={handleAddButton}
        >ADICIONAR</button>
      </div>
        <ul>
          {list.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
    </div>
  );
}

export default Page;
