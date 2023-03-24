import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunk";
import {useDispatch} from "react-redux";

const TuitItem = ({
                      tuit = {
                          "topic": "",
                          "userName": "",
                          "title": "",
                          "time": "",
                          "image": "",
                          "liked": false,
                          "replies": 0,
                          "retuits": 0,
                          "likes": 0,
                          "handle": "",
                          "tuit": ""
                      }
                  }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id))
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} src={`${tuit.image}`}/>
                </div>
                <div className="col-11 ps-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span className="fw-bold">{tuit.userName} <i className="bi bi-check-circle-fill" style={{"color": "dodgerblue"}}></i>&nbsp;</span>
                            <span style={{"color": "grey"}}>{tuit.handle} - {tuit.time}</span>
                        </div>
                        <i className="bi bi-x-lg"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div>
                        {tuit.tuit}
                    </div>
                    <TuitStats stats={tuit} />
                </div>
            </div>
        </li>
    );
}

export default TuitItem;