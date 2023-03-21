import React from "react";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateProfile} from "../profile/profile-reducer";
import {useState} from "react";

const EditProfile = () => {
    const sel = useSelector(state => state.profile);
    const user = sel[0];
    const profilePath = "/tuiter/profile";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [location, setLocation] = useState(user.location);
    const [bio, setBio] = useState(user.bio);
    const [website, setWebsite] = useState(user.website);
    const [birthdate, setBirthdate] = useState(user.dateOfBirth);

    const toProfile = () => {
        navigate(profilePath);
    }

    const fnChangeHandler = (event) => {
        const fnValue = event.target.value;
        setFirstName(fnValue);
    }

    const lnChangeHandler = (event) => {
        const lnValue = event.target.value;
        setLastName(lnValue);
    }

    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        setBio(bioValue);
    }

    const locChangeHandler = (event) => {
        const locValue = event.target.value;
        setLocation(locValue);
    }

    const webChangeHandler = (event) => {
        const webValue = event.target.value;
        setWebsite(webValue);
    }

    const dateChangeHandler = (event) => {
        const dateValue = event.target.value.replace(/-/g,'/');
        setBirthdate(dateValue);
    }

    const onSaveClick = () => {
        const info = {
            ...user,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: birthdate
        }
        dispatch(updateProfile(info));
        navigate(profilePath);
    }

    return(
        <>
            <div className="row p-2">
                <div className="col-1">
                    <button className="cancel" onClick={toProfile}>
                        <i className="bi bi-x-lg" style={{"font-size":"25px"}}></i>
                    </button>
                </div>
                <div className="col-9 fw-bold fs-4 ps-3">
                    Edit Profile
                </div>
                <div className="col-2">
                    <button className="save" onClick={onSaveClick}>Save</button>
                </div>
            </div>
            <div className="row">
                <img className="banner" src={`${user.bannerPicture}`} />
            </div>
            <div className="row ps-3 pt-3 pb-4">
                <div>
                    <img className="edit-avatar" src={`${user.profilePicture}`} />
                </div>
            </div>
            <div className="row pt-5 ps-3 pe-3 pb-3">
                <div className="form-floating">
                    <input type="text" className="form-control" id="first-name-form"
                           onChange={fnChangeHandler} placeholder="John" defaultValue={`${user.firstName}`} />
                    <label for="first-name-form" className="ps-4">First Name</label>
                </div>
            </div>
            <div className="row p-3">
                <div className="form-floating">
                    <input type="text" className="form-control" id="last-name-form"
                           onChange={lnChangeHandler} placeholder="Doe" defaultValue={`${user.lastName}`}/>
                    <label htmlFor="last-name-form" className="ps-4">Last Name</label>
                </div>
            </div>
            <div className="row p-3">
                <div className="form-floating">
                    <textarea className="form-control" id="bio-form"
                              onChange={bioChangeHandler} placeholder="About Me" defaultValue={`${user.bio}`} style={{"height":"100px"}} />
                    <label for="bio-form" className="ps-4">Bio</label>
                </div>
            </div>
            <div className="row p-3">
                <div className="form-floating">
                    <input type="text" className="form-control" id="location-form"
                           onChange={locChangeHandler} placeholder="Boston, MA" defaultValue={`${user.location}`}/>
                    <label for="location-form" className="ps-4">Location</label>
                </div>
            </div>
            <div className="row p-3">
                <div className="form-floating">
                    <input type="text" className="form-control" id="website-form"
                           onChange={webChangeHandler} placeholder="abc.com" defaultValue={`${user.website}`}/>
                    <label for="website-form" className="ps-4">Website</label>
                </div>
            </div>
            <div className="row p-3">
                <div className="form-floating">
                    <input type="date" className="form-control" id="birthdate-form"
                           onChange={dateChangeHandler} placeholder="0000-00-00" defaultValue={user.dateOfBirth.replace(/\//g,'-')}/>
                    <label for="birthdate-form" className="ps-4">Birth Date</label>
                </div>
            </div>
        </>
    );
}

export default EditProfile;