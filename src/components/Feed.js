import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import '../styles/Feed.css'

export default function Feed() {
    return (
        <div className="feed">
        <div className="card">
            <div className="card-body">
            <div className="card-title">
                <img src="https://snowbit.vercel.app/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F65452005%3Fv%3D4&w=384&q=75" alt="profile" className="rounded-circle avatar"/>
                <h3 className="username">snowbit</h3>
            </div>
            <div className="card-text">
                <img src="post.jpg" className="img-fluid post" alt="post"/>
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
                    <p className="post-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                    </p>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    )
}
