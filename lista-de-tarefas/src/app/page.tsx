"use client"

import { useState } from "react"
import { TodoItem } from "./types/TodoItem"

const Page = () => {

  const [itemInput, setItemInput] = useState('')

  const [list, setList] = useState<TodoItem[]>([
    { label: 'Fazer dever de casa', checked: true },
    { label: 'Comprar bolo', checked: false },
  ])

  const handleAddButton = () => {
    if (itemInput.trim() === '') return
    setList([...list, { label: itemInput, checked: false }])
    setItemInput('')
  }

  const deleteItem = (index: number) => {
    setList(
      list.filter((item, key) => key !== index)
    )
  }

  const toggleItem = (index: number) => {
    let newList = [...list]
    newList[index].checked = !newList[index].checked
    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-gray-700">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button className="bg-green-700 p-3 rounded-md" onClick={handleAddButton}>Adicionar</button>
      </div>
      <p className="my-4">{list.length} itens na lista</p>
      <ul className="w-full max-w-lg pl-5">
        {list.map((item, index) =>
          <li>
            <input onClick={() => toggleItem(index)} type="checkbox" checked={item.checked} className="w-5 h-5 mr-3" />
            {item.label} - <button onClick={() => deleteItem(index)} className="bg-red-700 p-1 rounded-md text-sm hover:underline">Deletar</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Page