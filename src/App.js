import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import MainSearchBar from "./pages/MainSearchBar";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import MainMenu from "./pages/MainMenu";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainSearchBar />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/profiles/:username" element={<Profile />}></Route>
                </Route>
                <Route path="/articles/" element={<Articles />}>
                    <Route path=":id" element={<Article />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
