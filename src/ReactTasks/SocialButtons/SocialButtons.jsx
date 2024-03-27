import './SocialButtons.css'

function SocialButtons(){

    return(
        <div>
            <div className="bgcontainer">
            <h1>Social Buttons</h1>
            <div className="buttoncontainer">
            <button className='like'>Like</button>
            <button className="comment">Comment</button>
            <button className="share">Share</button>
            </div>
            </div>
        </div>
    )
}
export default SocialButtons