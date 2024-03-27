import './Notification.css'

function Notification(){

    return (
        <div className='bgcontainer'>
            <h1>Notifications</h1>

            <div className="notifContainer">
                <div className="card card1">
                    <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" alt="" />
                    <span>Information Message</span>
                </div>
                <div className="card card2">
                    <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="" />
                    <span>Success Message</span>
                </div>
                <div className="card card3">
                    <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" alt="" />
                    <span>Warning Message</span>
                </div>
                <div className="card card4">
                    <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" alt="" />
                    <span>Error Message</span>
                </div>
            </div>
        </div>
    )
}

export default Notification