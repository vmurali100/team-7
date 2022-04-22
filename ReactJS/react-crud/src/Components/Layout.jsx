import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Router Project</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="nav-link active">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/gallery" className="nav-link active">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/projects" className="nav-link active">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className="nav-link active">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}
