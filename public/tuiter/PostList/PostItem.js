const tuitMedia = (post) => {
    if (post.image === '') {
        return(`
            <div class="wd-tuit-link-preview">
                <img class="wd-preview-image img-fluid" src="${post.previewImage}" />
                <div class="wd-preview-caption">
                    ${post.previewTitle}</br>
                    <span class="wd-grey-text">${post.previewCaption}</br>
                    <i class="fa fa-link" style="color:grey"></i> ${post.previewLink}</span>
                </div>
            </div>
        `);
    } else {
        return(`
            <div>        
                <img class="wd-tuit-image img-fluid" src="${post.image}" />
            </div>
        `);
    }
}
const PostItem = (post) => {
    return(`
        <li class="list-group-item d-flex" id="tuit">
            <img class="wd-tuit-avatar" src="${post.userAvatar}" />
            <div class="wd-tuit-body">
                <div class="d-flex flex-row justify-content-between">
                    <div>
                        <span class="wd-keyword">${post.userName} <i class="fa fa-check-circle"></i></span>
                        <span class="wd-grey-text">@${post.userHandle} - ${post.time}</span>
                    </div>
                    <i class="fa fa-ellipsis-h" style="color:grey"></i>
                </div>
                <div>${post.text}</div>
                ${tuitMedia(post)}
                <div class="d-flex flex-row wd-tuit-footer justify-content-between pe-xl-5">
                    <div>
                        <i class="fa fa-comment"></i><span class="ps-3">${post.replies}</span>
                    </div>
                    <div>
                        <i class="fa fa-retweet"></i><span class="ps-3">${post.retuits}</span>
                    </div>
                    <div>
                        <i class="fa fa-heart"></i><span class="ps-3">${post.likes}</span>
                    </div>
                    <div>
                        <i class="fa fa-share"></i>
                    </div>
                </div>
            </div>
        </li>   
    `);
}

export default PostItem;