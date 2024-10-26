import './styles.css'

/* eslint-disable react/prop-types */
const Layout = ({children}) => {
    return (
        <main className='layout'>
            {children}
        </main>
    )
}

export { Layout };