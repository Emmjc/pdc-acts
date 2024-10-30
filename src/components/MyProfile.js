import React from "react";

const MyProfile = () => {
    return (
        <div className="container mt-5">
            <div className="card p-4">
                <h1 className="card-title">Your Profile</h1>
                <p className="card-text">
                    This is your profile page. You can edit your information here.
                </p>
                <hr />
                <h5>Edit Your Information</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bio" className="form-label">Bio</label>
                        <textarea className="form-control" id="bio" rows="3" placeholder="Tell us about yourself"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
            </div>
        </div>
    );
}

export default MyProfile;
