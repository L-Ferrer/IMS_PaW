import { Outlet } from "react-router-dom";

const renderForm = (
    <div className="navbar">
        <a href="/" className='nav_child'>Home</a>
        <a href="/map" className='nav_child'>Map</a>
        <a href="/about" className='nav_child'>About</a>
    </div>
);

const Navbar = () => {
    return (
        <>
            {renderForm}
            <Outlet />
        </>
    )
};

export default Navbar;