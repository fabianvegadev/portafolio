import { useContext } from 'react';
import { MostroDevContext } from '../../../../Context';
import { Layout } from '../../../../GeneralComponents/Layout';
import { StackItem } from './Components/StackItem';
import './styles.css'

const HomeStack = () => {
    const context = useContext(MostroDevContext)

    return (
        <Layout>
            <h2>Stack</h2>
            <div className='section-stack-items-container'>
                {context.stackItems.map((item, index) => (
                    <StackItem
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        logos={item.logos}/>
                ))}
            </div>
            <button>Ver mas...</button>
        </Layout>
    )
}

export { HomeStack };