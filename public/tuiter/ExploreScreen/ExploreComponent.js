import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
             <div class="row">
                <div class="col-11">
                    <div class="input-group">
                        <span class="input-group-text wd-search-box border-end-0"><i class="fa fa-search" style="color: grey"></i></span>
                        <input class="form-control wd-search-box border-start-0" type="search" placeholder="Search Tuiter" />
                    </div>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html"><i class="fa fa-cog fa-2x"></i></a>
                </div>
            </div>
            <div class="wd-spacing">
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link active" href="for-you.html">For you</a></li>
                    <li class="nav-item"><a class="nav-link" href="trending.html">Trending</a></li>
                    <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
                    <li class="nav-item"><a class="nav-link" href="sports.html">Sports</a></li>
                    <li class="nav-item d-none d-md-block"><a class="nav-link" href="entertainment.html">Entertainment</a></li>
                </ul>
            </div>
            <div class="wd-featured-tuit wd-spacing">
                <img class="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" />
                <h2 class="wd-featured-headline">SpaceX's Starship</h2>
            </div>
            <div class="mt-2">
                ${PostSummaryList()}
            </div>
    `);
}
export default ExploreComponent;
