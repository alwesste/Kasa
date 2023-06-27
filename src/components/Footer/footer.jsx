import kasaLogoNoir from '../../assets/logo/LOGO-noir.png'
import "./footer.scss"


function Footer () {
    return (
        <div className='footer'>
            <img src={kasaLogoNoir} alt="logo de la societe kasa" className='footer-img'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer