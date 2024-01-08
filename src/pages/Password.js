import React, { useEffect, useRef } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

const Password = () => {

    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate('/list');
        }
    };

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="image">
                            <div className="logo">
                                <NavLink to={"/"}>
                                    <img src="assets/img/logo.png" alt="logo" className="img-fluid" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Login Section */}
            <section className="login_seection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="main_text text-center">
                            <h1>Log in</h1>
                        </div>
                        <form>
                            <div className="text-center">
                                <input type="password" className="form_control" placeholder="Enter your password or code" onKeyDown={handleKeyDown} ref={inputRef} autoComplete="new-password" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )
}

export default Password