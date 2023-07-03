import backGroundPhoto2 from "../../assets/photos/photo2.png"
import List from "../../components/List/list"
import "./a-propos.scss"


function About() {

    const content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
    const content2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."
    const content3 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou deperturbation du voisinage entraînera une exclusion de notre plateforme."
    const content4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logementcorrespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
   
    return (
    <>
        <div className="about">
            <img className="about-img" src={backGroundPhoto2} alt="une vallee avec une montagne et une riviere" />
        </div>
        <div className="about-list"> 
            <List label="Fiabilité" content={content}/>
            <List label="Respect" content={content2}/>
            <List label="Service" content={content3}/>
            <List label="Securite" content={content4}/>        
        </div>
    </>
    )
}

export default About