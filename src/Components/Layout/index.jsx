import './styles.css'

/* eslint-disable react/prop-types */
const Layout = ({children}) => {
    return (
        <div className='layout'>
            {children}
        </div>
    )
}

export { Layout };