import "./App.css";

function Header() {
    return (
        <div className="Header">
            <div id="headerContainer">
                <div id="logoAndSlogan">
                    <a
                        href="/home"
                        style={{ textDecoration: "none", color: "#4f4e4e" }}
                    >
                        <h1>Lominus</h1>
                    </a>
                    <p>Articles and book reviews</p>
                </div>
                <div id="navigationBarHeader">
                    <ul id="navigationList">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="/bookReviews">Book reviews</a>
                        </li>
                        <li>
                            <a href="#randomArticles">Random articles</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
