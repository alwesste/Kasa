import "./error.scss"

function Error() {
      
    return (
        <div className="error">
            <h1 className="error-404">404</h1>
            <p className="error-title">Oups! La page que vous demandez n'existe pas.</p>
            <a className="error-link" href="../">Retourner sur la page d'accueil</a>
        </div>
    )
}

export default Error