import { useState } from 'react'

const ListRender = () => {

  const [users, setUsers] = useState(
    [
      { id: 1, name: 'Roberto' },
      { id: 2, name: 'Matheus' },
      { id: 3, name: 'Berger' }]
  );

  const deleteRandomUser = () => {

    let randomId = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {    
      return prevUsers.filter((item) => item.id !== randomId );
    })

  }

  return (
    <div>
      {
        users.map((item) => (
          <li key={item.id}> {item.name}</li>
        ))
      }


      <button onClick={deleteRandomUser}>Deletar usuario aletorio</button>

    </div>
  )
}

export default ListRender
