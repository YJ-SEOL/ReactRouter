import { style } from "@mui/system";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <AriticleItem id={1} />
                <AriticleItem id={2} />
                <AriticleItem id={3} />
            </ul>
        </div>
    );
};

const AriticleItem = ({ id }) => {
    const activeStyle = {
        color: "Lime",
        fontSize: 21,
        fontWeight: "bold",
    };
    return (
        <NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글 {id}
        </NavLink>
    );
};
export default Articles;
