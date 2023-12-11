import React from 'react'
import { useState } from 'react'

const UsersTableComponent = () => {

    const [users, AddUser] = useState([
        { id: 1, name: 'Roberto', job: 'Developer', age: 21 }
    ])

    const AddUserInTable = () => {
        var name = document.getElementById('Name').value
        var age = document.getElementById('Age').value
        var job = document.getElementById('Job').value

        var randomId = Math.floor(Math.random() * 100000);

        var newUser = { id: randomId, name: name, job: job, age: age };
        console.log(newUser)
        console.log(users)

        AddUser((prevUsers) => {
            prevUsers[0].name = 'Paulo'
            return prevUsers;
        }
        )

    }

    return (
        <div>
            <div className="form">
                <br />
                <label htmlFor="Name">Nome: </label>
                <input type="text" id="Name" />
                <label htmlFor="Age"> Idade: </label>
                <input type="number" id="Age" />
                <label htmlFor="job" > Profissão: </label>
                <input type="text" id="Job" />
                <button className="form-button" onClick={AddUserInTable}> Adicionar usuario</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Profissão</th>
                        <th scope="col"><i className="bi bi-pen"></i></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.job}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}




export default UsersTableComponent;

