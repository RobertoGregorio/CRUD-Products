import {useState} from 'react'

const ManageData = () => {

let name = 'Roberto';

const [nameState, setName] = useState("Roberto")
const [name2State, setName2] = useState("Matheus")

    return (
        <div>
            <div>
                <p>Olá {name}</p>
                <button onClick={() => (name = "Paulo")}>Alterar Nome</button>
            </div>

            <div>
                <p>Olá {nameState}</p>
                <button onClick={() => (setName("Paulo"))}>Alterar Nome</button>

                <p>Olá {name2State}</p>
                <button onClick={() => (setName2("Marcos"))}>Alterar Nome</button>
            </div>
        </div>
    )
}

export default ManageData
