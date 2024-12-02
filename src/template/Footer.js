
import React from "react";
import {Link} from 'react-router-dom';
function Footer()
{
    return(
        <nav className="bg-dark d-flex justify-content-left mt-5 ">
            {/* <h1 className="text-warning">Home Loan Application Footer</h1><br></br> */}
            <div >
            <h1 >neha</h1>
            
            <Link className="btn btn-light me-4 mb-5" to={'/aboutUs'}>About Us</Link>
            <Link className="btn btn-light me-4 mb-5" to={'/usefullink'}>Useful Links</Link>
            <Link className="btn btn-light me-4 mb-5" to={'/resources'}>Resources</Link>
            <Link className="btn btn-light me-4 mb-5" to={'/need'}>Need Help</Link>
            <Link className="btn btn-light me-4 mb-5" to={'/connect'}>Connect</Link>
            
            </div>

        </nav>
    )
}
export default Footer;