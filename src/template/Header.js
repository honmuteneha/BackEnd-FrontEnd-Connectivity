
import React from "react";
import {Link} from 'react-router-dom';
function Header()
{
    return(
        <nav className="bg-dark d-flex justify-content-around">
            <h1 className="text-warning">Home Loan Application</h1>
            <div className="mt-2">
            <Link className="btn btn-light me-4" to={'/name'}>Name</Link>
            <Link className="btn btn-light me-4" to={'/aboutUs'}>About Us</Link>
            <Link className="btn btn-light me-4" to={'/contact'}>Contact</Link>
            <Link className="btn btn-light me-4" to={'/add'}>Enquiry</Link>
            <Link className="btn btn-light " to={'/view'}>ViewData</Link>
            </div>

        </nav>
    )
}
export default Header;