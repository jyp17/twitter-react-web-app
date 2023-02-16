const WhoToFollowListItem = (who) => {
    return(`
       <li class="list-group-item">
        <div class="d-flex flex-row justify-content-between">
            <div>
                <img class="wd-user-icon" src="${who.avatarIcon}" />
                <div class="d-inline-block wd-vertical-align ms-0 ms-xl-2 ms-xxl-3">
                    <span class="wd-keyword">${who.userName} </span><i class="fa fa-check-circle"></i></br>@${who.handle}
                </div>
            </div>
            <div class="pt-1 pb-1">
                <button class="btn btn-primary wd-rounded-btn">Follow</button>
            </div>
        </div>
       </li>
 `);
}
export default WhoToFollowListItem;