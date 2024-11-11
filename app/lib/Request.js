export const getYotubeData = async (URL) => {

    const url = `https://youtube-video-and-shorts-downloader1.p.rapidapi.com/api/getYTVideo?url=${URL}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'x-rapidapi-host': 'youtube-video-and-shorts-downloader1.p.rapidapi.com'
        }
    };
    try {
        const fetchData = await fetch(url, options);
        const result = await fetchData.json();
        return result;
    } catch (error) {

        console.error(error);
        return false;
    }

}


export const getFaceBookData = async (URL) => {

    const url = `https://facebook-videos-reels-downloader.p.rapidapi.com/get-video-info?url=${URL}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'x-rapidapi-host': 'facebook-videos-reels-downloader.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}


export const handleYoutubeDownload = (DownloadedUrl) =>{
      console.log(DownloadedUrl);

      const link = document.createElement('a');
      link.href = DownloadedUrl;
      link.setAttribute('download', 'video.mp4'); // specify the file name
      document.body.appendChild(link);
      link.click();
      link.remove();      

}


