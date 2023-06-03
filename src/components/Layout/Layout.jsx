import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './layout.module.css'


const Layout = () => {
    return <div>
        <header>
            <ul className={css.navigationHeder}>
                <li className={css.navigationItem}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={css.navigationItem}>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
            </ul>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />  
            </Suspense>    
        </main>

    </div>
}

export default Layout