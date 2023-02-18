import React from "react";
import "./index.css";
const PostItem = ({
                      post = {
                          "userName": "",
                          "userHandle": "",
                          "userAvatar": "",
                          "time": "",
                          "text": "",
                          "image": "",
                          "previewImage": "",
                          "previewTitle": "",
                          "previewCaption": "",
                          "previewLink": "",
                          "replies": "",
                          "retuits": "",
                          "likes": ""
                      }
                  }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} src={`${post.userAvatar}`}/>
                </div>
                <div className="col-11 ps-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span className="fw-bold">{post.userName} <i className="bi bi-check-circle-fill" style={{"color": "dodgerblue"}}></i>&nbsp;</span>
                            <span style={{"color": "grey"}}>@{post.userHandle} - {post.time}</span>
                        </div>
                        <i className="bi bi-three-dots" style={{"color": "grey"}}></i>
                    </div>
                    <div>
                        {post.text}
                    </div>
                    {
                        post.image === "" ?
                            <div className="wd-tuit-link-preview">
                                <img className="wd-preview-image" src={`${post.previewImage}`} />
                                <div className="pt-2 pb-2 ps-3 pe-3">
                                    {post.previewTitle}<br/>
                                    <span style={{"color": "grey"}}>{post.previewCaption}<br/>
                                    <i className="bi bi-link"></i> {post.previewLink}</span>
                                </div>
                            </div> :
                            <div>
                                <img className="wd-tuit-image" src={`${post.image}`}/>
                            </div>
                    }
                    <div className="d-flex justify-content-between" style={{"color": "grey"}}>
                        <div>
                                <i className="bi bi-chat pe-3"></i>{post.replies}
                        </div>
                        <div>
                                <i className="bi bi-arrow-repeat pe-3"></i>{post.retuits}
                        </div>
                        <div>
                                <i className="bi bi-heart pe-3"></i>{post.likes}
                        </div>
                        <div>
                                <i className="bi bi-box-arrow-up pe-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PostItem;