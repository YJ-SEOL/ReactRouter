import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();
    return (
        <div>
            <h1>About</h1>
            <p>이것은 상세페이지</p>
            <p>쿼리스트링 : {location.search}</p>
        </div>
    );
};

export default About;
