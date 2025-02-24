const Events = () => {

    

    const handleMyEvent = (e) => {
        console.log('ATIVOU O CRICK')
    }

    const renderSomething = (e) => {
        if(e) {
            return <h1>Eu posso renderizar This.</h1>
        } else {
            return <h1>Tambem posso renderizar that</h1>
        }
    }


    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui</button>
            </div>

            <div>
                <button onClick={() =>console.log("CLICOU")
                }>Clique aqui tambem</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;