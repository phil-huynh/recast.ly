import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = ({key, query}, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      key: key,
      q: query,
      part: 'snippet',
      maxResults: 8,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      console.log('Success');
      if (callback) {
        callback(data);
      }
    },
    error: function(response) {
      console.error('Request Failed', error);
    }
  });
};

export default searchYouTube;
