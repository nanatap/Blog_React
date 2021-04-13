import react, { useEffect, useState } from "react";
import { userActions } from "./Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function ArticleLong() {
    let articles = useSelector((state) => state.article);
    const dispatch = useDispatch();
    const urlName = window.location.href;
    const splitUrl = urlName.split("/");
    const encodedurl = splitUrl[4];
    const articleName = decodeURI(encodedurl);

    console.log(articleName);
    useEffect(() => {
        dispatch(userActions.booksAction());
    }, []);
    if (!articles) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div>
                {articles.map(({ name, date, long_desc, author, picture }) => {
                    if (name.includes(articleName)) {
                        return (
                            <div id="fullArticles" onClick={onclick}>
                                <h4>{name}</h4>
                                <img src={picture} />
                                <p>{long_desc} </p>
                                <p>
                                    &#128337; <span></span>
                                    {date}, <span>&#x1F469; </span>
                                    {author}
                                </p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default ArticleLong;
