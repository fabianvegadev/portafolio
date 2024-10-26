import './styles.css'

/* eslint-disable react/prop-types */
const Layout = ({children}) => {
    return (
        <section className='layout'>
            {children}
        </section>
    )
}

export { Layout };