import "./banner.scss"
 

function Banner({src, title}) {
    return (
        <div className='banner'>
            <img src={src} alt="paysage avec vue sur la mer" className='banner-img'/>
            {title && <p className='banner-title'>{title}</p>}
        </div>
    )
}

export default Banner
