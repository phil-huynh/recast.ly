// COMPONENT HIERARCHY:
// APP -- contains entirety of program
// Search -- Responsible for knowing and communicating information about the search input field
// VideoList -- A container component responsible for populating video list entry components
// VideoListEntry -- A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be played in the VideoPlayer component

// ? VideoPlayer --  Responsible for playing a single video and displaying information about it

//componentDidMount

import VideoListEntry from './VideoListEntry.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,

    };
    this.addVideos = this.addVideos.bind(this);
  }

  addVideos(newVideo) {
    var copy = this.state.videos.slice();
    copy.push(newVideo);
    this.setState({videos: copy });
  }

  render() {
    return (
      <main>
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> view goes here</h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><h5><em>videoPlayer</em> view goes here</h5></div>
            </div>
            <div className="col-md-5">
              <div><h5><em>videoList</em> view goes here</h5></div>
              <VideoList videos={this.state.videos} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
