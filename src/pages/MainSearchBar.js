import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MainMenu from "./MainMenu";

const MainSearchBar = () => {
    return (
        <>
            <div
                style={{
                    height: "320px",
                    display: "grid",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: "0 auto",
                    alignItems: "center",
                    position: "absolute",
                    top: "38%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    gridTemplateColumns: "3fr 1fr",
                    columnGap: "30px",
                }}
            >
                <input
                    style={{
                        textAlign: "center",
                        width: 400,
                        maxWidth: "100%",
                        margin: 10,
                        borderRadius: 5,
                        border: "none",
                    }}
                    placeholder="검색어를 입력하세요"
                ></input>
                <Button
                    style={{
                        margin: "0 auto",
                        width: 130,
                        backgroundColor: "#12266E",
                    }}
                >
                    검색
                </Button>
            </div>
        </>
    );
};

export default MainSearchBar;
