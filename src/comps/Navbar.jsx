import { Outlet } from "react-router-dom";

const renderForm = (
    <div className="navbar">
        <a href="/" className='nav_child'>Home</a>
        <a href="/map" className='nav_child'>Map</a>
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