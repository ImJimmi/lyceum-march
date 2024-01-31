import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import TitleSlide from "./slides/TitleSlide";

function Slides() {
    const deck = useRef(null);
    useEffect(() => {
        deck.current = new Reveal({
            backgroundTransition: "slide",
            transition: "slide",
        });
        deck.current.initialize();
    }, []);

    return (
        <div className="slides">
            <TitleSlide />
        </div>
    );
}

export default Slides;
