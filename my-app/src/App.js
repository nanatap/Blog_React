import react, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import booksImage from "./Screenshot_20210307-214155__01.jpg";
import imageMe from "./3567fcfc-b196-42f7-a6d4-44e45ea0641d.jpg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";
import wordpress from "./wordpress.svg";
import { userActions } from "./Actions/Actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
    let articles = useSelector((state) => state.article);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.booksAction());
    }, []);
    if (!articles) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <div id="homeFirstWidgetFullScreen">
                <div id="homeFirstWidgetLeft">
                    <h1 id="greetingCustomersFirst">Hey there!</h1>
                    <p id="infoTocustomer">
                        Put on your comfy reading socks, get an English tea and
                        read book reviews from Luminos. If you want to have a
                        new experience check out my random articles.
                    </p>
                    <p id="startJourneyHere">
                        First time to the site? <a href="#">Start here</a>
                    </p>
                </div>
                <div id="homeFirstWidgetRight">
                    <img src={booksImage} />
                </div>
            </div>
            <h2 id="blogPostHeading">From the blog</h2>

            <div id="homeSecondWidgetFullScreen">
                {articles.map(({ name, date, short_desc }) => {
                    return (
                        <div id="firstArticle">
                            <h4>{name}</h4>
                            <p>{date}</p>
                            <p>{short_desc} </p>
                            <p>Continue reading &#8594;</p>
                        </div>
                    );
                })}
            </div>
            <div id="homeThirdWidgetFullScreen">
                <div className="parallax">
                    {" "}
                    <div id="subscribe">
                        <h2>New posts in your inbox</h2>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                        ></input>
                        <button type="submit">Sign up</button>
                    </div>
                </div>
            </div>
            <div id="homeForthWidgetFullScreen">
                <div id="imgDiv-aboutme">
                    <img src={imageMe} />
                </div>
                <div id="aboutme-text">
                    <h3>About Me</h3>
                    <p>
                        Hi there, I am Nanata. Currently, working as an
                        E-commerce system manager. I spend most of my time on
                        software development, reading (classic, sci-fi and
                        historical) literature.This blog is for my love of
                        reading and creative writing. I would love to share some
                        of my favorites with you!
                    </p>
                    <h3>Let's hang out</h3>
                    <div id="soacial-icons">
                        <img src={linkedin} />
                        <img src={instagram} />
                        <img src={wordpress} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
