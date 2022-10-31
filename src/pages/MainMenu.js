import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Info } from "./assets/icons/ruleInfo.svg";
import { ReactComponent as Notice } from "./assets/icons/newRule.svg";
import { AiOutlineForm } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";

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
                    <Info />
                    규정정보
                </Button>
                <Button>
                    <MdPostAdd />
                    제•개정
                </Button>
                <Button variant="outline-primary">
                    <Notice width={100} height="102.5px" />
                    공지사항
                </Button>
                <Button>
                    <AiOutlineForm class name="form" width="102.5px" height="102.5px" />
                    서식
                </Button>
            </div>
        </div>
    );
};

export default MainMenu;
