import react, { useEffect, useState } from "react";
import "./App.css";

function Contact() {
    return (
        <div>
            <div>
                <h1 id="contactHeading">Contact</h1>
                <form id="contact-from">
                    <div id="name-contact">
                        <label>
                            Name{" "}
                            <span style={{ fontWeight: "400" }}>
                                (required)
                            </span>
                        </label>
                        <input type="tedxt" required></input>
                    </div>
                    <div id="email">
                        <label>
                            Email{" "}
                            <span style={{ fontWeight: "400" }}>
                                (required)
                            </span>
                        </label>
                        <input type="tedxt" required></input>
                    </div>
                    <div id="message">
                        <label>
                            Comment{" "}
                            <span style={{ fontWeight: "400" }}>
                                (required)
                            </span>
                        </label>
                        <textarea type="text"></textarea>
                    </div>
                    <submit id="submitComment">Submit</submit>
                </form>
            </div>
        </div>
    );
}

export default Contact;
