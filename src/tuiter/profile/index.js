import "./index.css"
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const user = useSelector(state => state.profile);
    return(
        <>
            <div className="row p-2">
                <div className="col-1 p-2">
                    <i className="bi bi-arrow-left" style={{"font-size":"25px"}}></i>
                </div>
                <div className="col-10 ps-5">
                    <div className="row fw-bold fs-5">
                        {user.firstName} {user.lastName}
                    </div>
                    <div className="row grey">
                        {user.tuitCount} Tuits
                    </div>
                </div>
            </div>
            <div className="row">
                <img className="banner" src={`${user.bannerPicture}`} />
            </div>
            <div className="d-flex flex-row justify-content-between p-3">
                <div>
                    <img className="avatar" src={`${user.profilePicture}`} />
                </div>
                <div>
                    <button className="edit-profile" onClick={()=>{}}>Edit Profile</button>
                </div>
            </div>
            <div className="row fw-bold ps-4 pt-4 fs-5">
                {user.firstName} {user.lastName}
            </div>
            <div className="row grey ps-4">
                {user.handle}
            </div>
            <div className="row ps-4 pt-4 pe-4 pb-2">
                {user.bio}
            </div>
            <div className="d-flex flex-row grey p-2">
                <div className="pe-3">
                    <i className="bi bi-geo-alt"></i> {user.location}
                </div>
                <div className="pe-3">
                    <i className="bi bi-balloon"></i> Born {user.dateOfBirth}
                </div>
                <div className="pe-3">
                    <i className="bi bi-calendar3"></i> Joined {user.dateJoined}
                </div>
            </div>
            <div className="d-flex flex-row p-2">
                <div className="pe-4">
                    <span className="fw-bold">{user.followingCount}</span>
                    <span className="grey"> Following</span>
                </div>
                <div>
                    <span className="fw-bold">{user.followersCount}</span>
                    <span className="grey"> Followers</span>
                </div>
            </div>
        </>
    );
}

export default ProfileComponent;