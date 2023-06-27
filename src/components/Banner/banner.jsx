import bannerPhoto from '../../assets/photos/photo1.png'
import "./banner.scss"
 

function Banner() {
    return (
        <img src={bannerPhoto} alt="paysage avec vue sur la mer" className='banner'/>
    )
}

export default Banner
