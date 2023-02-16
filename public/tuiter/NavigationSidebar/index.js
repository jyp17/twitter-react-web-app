const isActive = (activePage, pageName) => {
    return activePage === pageName? " active" : "";
}
const NavigationSidebar = (activePage) => {
    return(`
       <div class="list-group">
         <a class="list-group-item" href="/">
            <i class="fa fa-crow"></i>
            <span class="d-none d-xl-inline"> </span></a>
         <a class="list-group-item${isActive(activePage, `home`)}" href="../HomeScreen/index.html" >
            <i class="fa fa-home"></i>
            <span class="d-none d-xl-inline"> Home</span></a>
         <a class="list-group-item${isActive(activePage, `explore`)}" href="../ExploreScreen/index.html">
            <i class="fa fa-hashtag"></i>
            <span class="d-none d-xl-inline"> Explore</span></a>
         <a class="list-group-item${isActive(activePage, `notifications`)}" href="../notifications.html">
            <i class="fa fa-bell"></i>
            <span class="d-none d-xl-inline"> Notifications</span></a>
         <a class="list-group-item${isActive(activePage, `messages`)}" href="../messages.html" >
            <i class="fa fa-envelope"></i>
            <span class="d-none d-xl-inline"> Messages</span></a>
         <a class="list-group-item${isActive(activePage, `bookmarks`)}" href="../bookmarks/index.html">
            <i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-inline"> Bookmarks</span></a>
         <a class="list-group-item${isActive(activePage, `lists`)}" href="../lists.html" >
            <i class="fa fa-list"></i>
            <span class="d-none d-xl-inline"> Lists</span></a>
         <a class="list-group-item${isActive(activePage, `profile`)}" href="../profile.html" >
            <i class="fa fa-user"></i>
            <span class="d-none d-xl-inline"> Profile</span></a>
         <a class="list-group-item${isActive(activePage, `more`)}" href="../more.html">
            <i class="fa fa-ellipsis-h"></i>
            <span class="d-none d-xl-inline"> More</span></a>
       </div>
       <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
       </div>
    `);
}
export default NavigationSidebar;