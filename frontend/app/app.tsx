//Dependencies ----------------------------------------------------

//React
const ReactDOM = require("react-dom/client");
const React = require("react");

//React-Router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Redux: Provider & Store
import { Provider } from 'react-redux';
import { Store } from './reduxStore/store';

//Components


//Typescript Component
import { MyName } from './components/typescript_comp';
import { PopularBooks } from './components/popular_books_comp';
import { TopStories } from "./components/top_stories";
import { AboutProject } from './components/aboutProject';
import {Navigator} from "./components/navigation";

//SCSS styles
import './src/scss/main.scss'


//Application code -------------------------------------------------

//Props data for Components
const header = "Основная страница";
const article = "Второстепенная страница";
const notFoundText = "Страница не найдена";

ReactDOM.createRoot(
    document.getElementById("app")
)

    .render(
        <Provider store={Store}>
            <BrowserRouter>
                <div>
                    <Navigator />
                    <Routes>
                        <Route path="*" element={<MyName />} />
                        <Route path="popular_articles" element={<MyName />} />
                        {/* <Route path="popular_books" element={<PopularBooks />} /> */}
                        <Route path="top_stories" element={<TopStories />} />
                        <Route path="about" element={<AboutProject />} />


                        {/* <Route path="/about" element={<Article content={article} />} />
                        <Route path="*" element={<NotFound data={notFoundText} />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );