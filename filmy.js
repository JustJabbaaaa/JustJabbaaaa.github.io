const API_KEY = ''; // Replace with your YouTube Data API key
const CHANNEL_ID = 'UC5UrDmPQeRHo1Ts9ielirgQ'; // Replace with the channel ID you want to fetch videos from
const MAX_RESULTS = 3;


async function fetchLatestVideos() {
    console.log('Fetching latest videos...');  // Log to confirm the function is called
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`);
        console.log('Response:', response);  // Log the response object to check if it's valid
        const data = await response.json();
        console.log('Data received:', data);  // Log the received data to see the format
        displayVideos(data.items);
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
    }
}

function displayVideos(videos) {
    console.log('Displaying videos:', videos);  // Log to check if videos are correctly passed to this function
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = ''; // Clear previous videos

    videos.forEach(video => {
        const videoId = video.id.videoId;
        const videoTitle = video.snippet.title;
        const videoThumbnail = video.snippet.thumbnails.high.url;

        const videoElement = `
            <div class="film">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                <h3>${videoTitle}</h3>
            </div>
        `;
        videosContainer.innerHTML += videoElement;
    });
}

// Call the function to fetch and display videos
fetchLatestVideos();
