const Challenge = () => {

    const a = 10;
    const b = 15;

    const Sum = () => {
       alert(a + b);
    }

    return (

        <div>
            <p>A: {a}</p>
            <p>B:  {b}</p>
            <button onClick={Sum}>Somar valores</button>
        </div>

    )
}


export default Challenge;