import backGroundPhoto2 from "../../assets/photos/photo2.png"
import List from "../../components/List/list"
import "./a-propos.scss"


function About() {
    return (
    <>
        <div className="about">
            <img className="about-img" src={backGroundPhoto2} alt="une valle avec une montagne et une riviere" />
        </div>
        <div className="about-list">
        <List className="special" label="Fiabilité"/>
        <List label="Respect"/>
        <List label="Service"/>
        <List label="Securite"/>        
        </div>
    </>
    )
}

export default About