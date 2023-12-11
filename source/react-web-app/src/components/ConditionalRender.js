import { useState } from 'react'

const ConditionalRender = () => {

    const [isLogged] = useState(false);


    return (
        <div>
            <h1>isso será exibido?!</h1>
           {
            isLogged && <p>usuario está logado se isto for verdadeiro</p>
           }
        </div>
    )
}

export default ConditionalRender
