import "./CongratsCard.css"

function CongratsCard(){

    return(
        <div className="bgContainer">
            <h1>Congratulations</h1>
            <div className="cardcontainer">
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="" />
                <h2>Kiran V</h2>
                <p>Vishnu Institute of Computer Education and Technology, Bhimavarm</p>
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="" />
            </div>
        </div>
    )
}
export default CongratsCard