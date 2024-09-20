import React from 'react'
import './Benefits.css'
const urlCubeImg = "https://static.vecteezy.com/system/resources/thumbnails/017/784/940/small_2x/box-cube-icon-on-transparent-background-free-png.png"

const Benefits = () => {
    return (
        <section>
            <div className='benefits-container'>
                <div className='benefits-video'>
                    <video controls preload="none">
                        <source src="/path/to/video.mp4" type="video/mp4" />
                        <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='benefits-container-info'>
                    <div className='benefits-items'>
                        <div className='benefits-item'>
                            <img src={urlCubeImg} />
                            <h3>Benefit 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.</p>
                        </div>
                        <div className='benefits-item'>
                            <img src={urlCubeImg} />
                            <h3>Benefit 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.</p>
                        </div>
                        <div className='benefits-item'>
                            <img src={urlCubeImg} />
                            <h3>Benefit 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.</p>
                        </div>
                        <div className='benefits-item'>
                            <img src={urlCubeImg} />
                            <h3>Benefit 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore.</p>
                        </div>

                    </div>

                    <div class="benefits-cta-container">
                        <div class="benefits-cta-text">
                            CTA
                        </div>
                        <div class="benefits-cta-description">
                            Shopify Secure Checkout xxxxx 500+ Star Reviews Online
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Benefits