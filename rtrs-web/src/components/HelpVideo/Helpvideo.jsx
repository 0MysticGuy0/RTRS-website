import '../../styles/App.css'

function HelpVideo({activatedVideo, setActivatedVideo, videoRef}){
    return (
        <div className='video-wrapper'>
            <div style={{display:activatedVideo?'none':'flex'}} className="videoOverlay" onClick={()=> setActivatedVideo(true)}>
                <svg className="videoOverlay__playBtn"
                    xmlns="http://www.w3.org/2000/svg" id="mdi-play-circle"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"  d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                <span className="videoOverlay_text">ПОДРОБНЕЕ О КАБИНЕТЕ</span>
            </div>
            <video ref={videoRef} className='login-page__video' controls={activatedVideo} poster="/vhelp-preview.png">
                <source src='/help.mp4' type='video/mp4'/>
            </video>
         </div>
    )
}

export default HelpVideo;