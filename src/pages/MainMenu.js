import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Test } from "./assets/icons/test.svg";

const MainIconStyle = {
    width: "700px",
    hight: "500px",
    display: "grid",
    flexDiction: "row",
    margin: "0 auto",
    padding: 60,
    alignItem: "center",
    gridTemplateColumns: "1fr 1fr 1fr 1fr ",
    columnGap: "22px",
    alignSelf: "center",
};

const MainMenu = () => {
    return (
        <div>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/about">소개</Link>
                    </li>
                    <li>
                        <Link to="/profiles/velopert">velopert의 프로필</Link>
                    </li>
                    <li>
                        <Link to="/profiles/gildong">gildong 프로필</Link>
                    </li>
                    <li>
                        <Link to="/profiles/void">존재하지 않는 프로필</Link>
                    </li>
                    <li>
                        <Link to="/articles">게시글 목록</Link>
                    </li>
                </ul>
            </nav> */}
            <div style={MainIconStyle}>
                <Button variant="outline-primary">
                    <Test />
                    규정정보
                </Button>

                <Button>제•개정</Button>
                <Button>공지사항</Button>
                <Button>서식</Button>
            </div>
        </div>
    );
};

export default MainMenu;
