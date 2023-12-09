const Events = () =>{

const handleMyEvent = (e) =>{
 alert('testando evento em JSX')
}

    return ( 
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => { alert("Clicou!")}}>Clique aqui tambem</button>
               
            </div>
        </div>
    )
}

export default Events;