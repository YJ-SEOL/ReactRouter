import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "react-bootstrap";
import MainMenu from "./MainMenu";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);
    };
    const goArticles = () => {
        // articles 경로로 이동
        navigate("/articles");
    };
    const buttonStyle = {
        width: "200px",
        backgroundColor: "transparent",
        border: "none",
        color: "#12266E",
        fontWeight: "bold",
    };
    const buttonStyle__2 = {
        width: "200px",
        backgroundColor: "transparent",
        border: "none",
        textAlign: "left",
        marginLeft: "20px",
        color: "#12266E",
        fontWeight: "bold",
    };

    return (
        <div>
            <header
                style={{
                    background: "#F4F6FB",
                    padding: 16,
                    fontSize: 24,
                    display: "flex",
                    flexDirection: "row",
                    position: "sticky",
                    top: "0",
                }}
            >
                {/* <button style={buttonStyle_1} onClick={goBack}>
                    뒤로가기
                </button>
                <button style={buttonStyle_2} onClick={goArticles}>
                    게시글 목록
                </button> */}
                <button style={buttonStyle} onClick={goBack}>
                    규정관리시스템
                </button>
                <p style={{ verticalAlign: "middle", margin: "0", padding: "3px 6px" }}>|</p>
                <button style={buttonStyle__2} onClick={goArticles}>
                    HMM
                </button>
                <NavLink
                    to={`/login`}
                    style={{
                        textDecorationLine: "none",
                        float: "right",
                        marginLeft: "auto",
                        marginRight: "40px",
                    }}
                >
                    <Button className="float-right" style={{ backgroundColor: "#12266E" }}>
                        logIn
                        <LoginIcon style={{ marginLeft: "10px" }} />
                    </Button>
                </NavLink>
            </header>

            <main
            // style={{
            //     height: "50vh",
            //     background: "lightgray",
            //     padding: 16,
            //     fontSize: 24,
            // }}
            >
                <Outlet />
            </main>
            <MainMenu />
        </div>
    );
};

export default Layout;
