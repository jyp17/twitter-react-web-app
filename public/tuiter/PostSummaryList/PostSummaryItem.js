const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="d-flex flex-row justify-content-between">
                <div>
                    <span class="wd-grey-text">${post.topic}</span></br>
                    <span class="wd-keyword">${post.userName} <i class="fa fa-check-circle"></i></span><span class="wd-grey-text"> - ${post.time}</span></br>
                    <span class="wd-keyword">${post.title}</span>
                </div>
                <div>
                    <img class="wd-summary-image" src="${post.image}" />
                </div>
            </div>
        </li>   
    `);
}

export default PostSummaryItem;