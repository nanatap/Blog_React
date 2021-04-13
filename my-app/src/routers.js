import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./App";
import Header from "./Header";
import BookReviews from "./booksreviews";
import ArticlesLong from "./longArticles";
import Contact from "./contact";

function Routers() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/bookReviews">
                        <BookReviews />
                    </Route>
                    <Route path="/article-long">
                        <ArticlesLong />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Routers;
