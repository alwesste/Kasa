import bannerPhoto from '../../assets/photos/photo1.png'
import "./banner.scss"
 

function Banner() {
    return (
        <div className='banner'>
            <img src={bannerPhoto} alt="paysage avec vue sur la mer" className='banner-img'/>
            <p className='banner-title'>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner
