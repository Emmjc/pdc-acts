import React from "react";

const MyHome = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center bg-light p-5 rounded">
                <h1 className="display-4 text-dark">Welcome to the Home Page</h1>
                <p className="lead text-dark">This is the Home page of the simple navigation example.</p>
                <hr className="my-4" />
                <p className="text-dark">Explore our features and enjoy your stay!</p>
                <a className="btn btn-primary btn-lg" href="/profile" role="button">
                    Go to Profile
                </a>
            </div>
        </div>
    );
}

export default MyHome;
