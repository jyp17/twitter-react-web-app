import React from "react";
import "./index.css";
import {updateLikes} from "./tuits-reducer";
import {useDispatch, useSelector} from "react-redux";

const TuitStats = ({stats}) => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const likeClickHandler = (tuit) => {
        dispatch(updateLikes(tuit))
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
                <button onClick={()=>likeClickHandler(stats)}>
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