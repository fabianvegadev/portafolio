const CardProject = () => {

    return (
        <div>
            <figure className="project-image">
                <img src='' alt=''/>
            </figure>

            <div className="project-content">
                <h3 className="project-title">Título del Proyecto</h3>

                <p className="project-description">
                    Breve descripción del proyecto, destacando su funcionalidad o propósito.
                </p>

                <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>CSS</span>
                </div>

                <button>Ver mas...</button>
                <button>Proyecto</button>
        </div>
        </div>
    )
}

export { CardProject };