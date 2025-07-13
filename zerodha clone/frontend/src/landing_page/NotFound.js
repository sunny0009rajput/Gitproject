import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='text-center mt-5 mb-5'>
            <h1> 404 Page Not Found </h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link class="d-grid gap-2 col-3 mx-auto" to="/">
                  <button type='button' className='btn btn-primary fs-5 p-2 ' >Go to Home page</button>
                </Link>
        </div>
     );
}

export default NotFound;