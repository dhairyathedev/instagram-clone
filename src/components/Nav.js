import '../styles/Nav.css';

export default function Nav() {
    return (
        <div className="navigation">
            <div className="navigation-left">
                <img className="navigation-logo" src="images/icon.png" alt="logo" />
            </div>
            <div className="navigation-center">
                <h3>How do you do?</h3>
            </div>
            <div className="navigation-right">
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}
