import React, {Suspense } from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import classNames from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}> toggle theme</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;