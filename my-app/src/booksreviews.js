import react, { useEffect, useState } from "react";
import { userActions } from "./Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./App.css";

function Bookreviews() {
    let articles = useSelector((state) => state.article);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(userActions.booksAction());
    }, []);
    if (!articles) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div>
                {articles.map(({ name, date, short_desc, author }) => {
                    return (
                        <div id="fullArticles">
                            <h4
                                onClick={() => {
                                    history.push({
                                        pathname: "/article-long/" + name,
                                    });
                                }}
                            >
                                {name}
                            </h4>
                            <p>{short_desc} </p>
                            <p>
                                &#128337; <span></span>
                                {date}, <span>&#x1F469; </span>
                                {author}
                            </p>
                            <p>Continue reading &#8594;</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Bookreviews;
