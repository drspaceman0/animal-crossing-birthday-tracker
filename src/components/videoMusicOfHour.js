import React from "react"

const URLs = [
    "https://www.youtube.com/embed/9j9YEuFeDAw", // 12am 
    "https://www.youtube.com/embed/UMMRXzXs-_k", // 1am 
    "https://www.youtube.com/embed/-GS2Uf2koDI", // 2am 
    "https://www.youtube.com/embed/se7iaIfFdoQ", // 3am 
    "https://www.youtube.com/embed/AzHvhnzxeEw", // 4am 
    "https://www.youtube.com/embed/1auEF6PRm7Q", // 5am 
    "https://www.youtube.com/embed/hhlLbg4CRBc", // 6am 
    "https://www.youtube.com/embed/jcPIAICO-DI", // 7am 
    "https://www.youtube.com/embed/J22dco5U-nY", // 8am 
    "https://www.youtube.com/embed/odevRs61OqY", // 9am 
    "https://www.youtube.com/embed/uFq-VvnEa80", // 10am
    "https://www.youtube.com/embed/0dzoz1iOvws", // 11am
    "https://www.youtube.com/embed/4pmZrtO8_co", // 12pm
    "https://www.youtube.com/embed/dAABrbS8QeA", // 1pm
    "https://www.youtube.com/embed/hwENcKas4nU", // 2pm
    "https://www.youtube.com/embed/TMFHHTFEMPQ", // 3pm
    "https://www.youtube.com/embed/_m_cI7cssPQ", // 4pm
    "https://www.youtube.com/embed/zcIDJd-ncHI", // 5pm
    "https://www.youtube.com/embed/7nNsOcPfGxk", // 6pm
    "https://www.youtube.com/embed/T_454gyj9PE", // 7pm
    "https://www.youtube.com/embed/GlYzXvHQaDw", // 8pm
    "https://www.youtube.com/embed/Au8cSsWgYUY", // 9pm
    "https://www.youtube.com/embed/nB1xsg-X3-0", // 10pm
    "https://www.youtube.com/embed/Ar8sNQNvi90"  // 11pm 
];

const VideoMusicOfHour = (props) => {
    const hour = props.hour;
    const videoURL = URLs[hour];
    return (
        <section className="mx-auto flex items-center justify-center h-full flex-1 ">
            <iframe title="Youtube Video of Animal Crossing OST" className="max-w-md shadow-md" src={videoURL} frameBorder="0" ></iframe>
        </section>
    );
}
export default VideoMusicOfHour