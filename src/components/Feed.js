
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import '../styles/Feed.css'
export default function Feed(props) {
    const likes = Math.floor(Math.random() * 100)
    return (
        <div>
        <div className="box">
        <div className="card">
            <div className="card-body">
            <div className="card-title">
                <img src={props.avatar} alt="profile" className="rounded-circle avatar"/>
                <h3 className="username">{props.name}</h3>
            </div>
            <div className="card-text">
                <img src={props.postImg} className="img-fluid post" alt="post"/>
                <div className="post-info">
                    <div className="icons">
                    <div className="icons-left">
                        <FontAwesomeIcon icon={faHeart} className="post-icon"/>
                        <FontAwesomeIcon icon={faComment} className="post-icon"/>
                        <FontAwesomeIcon icon={faPaperPlane} className="post-icon"/>
                    </div>
                    <div className="icons-right">
                        <FontAwesomeIcon icon={faBookmark} className="post-icon"/>
                    </div>
                    </div>
                    <p className="likes">
                        {likes} likes
                    </p>
                    <p className="post-text">
                    {props.description}
                    </p>
                </div>
            </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}
