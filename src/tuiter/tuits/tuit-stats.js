import React from "react";
import "./index.css";
import {updateLikes} from "./tuits-reducer";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunk";

const TuitStats = ({stats}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch(updateTuitThunk({
            ...stats,
            likes: stats.liked? stats.likes - 1 : stats.likes + 1,
            liked: !stats.liked
        }));
    }
    return (
        <div className="row pt-3" style={{"color":"grey"}}>
            <div className="col">
                <button><i className="bi bi-chat pe-3"></i></button>{stats.replies}
            </div>
            <div className="col">
                <button><i className="bi bi-arrow-repeat pe-3"></i></button>{stats.retuits}
            </div>
            <div className="col">
                <button onClick={()=>likeClickHandler()}>
                    <i className={`bi ${stats.liked? 'bi-heart-fill' : 'bi-heart'} pe-3`} style={{"color": `${stats.liked? 'red' : 'grey'}`}}></i>
                </button>{stats.likes}
            </div>
            <div className="col">
                <button><i className="bi bi-box-arrow-up pe-3"></i></button>
            </div>
        </div>
    );
}

export default TuitStats;