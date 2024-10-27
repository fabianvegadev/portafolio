import { useContext } from 'react';
import { MostroDevContext } from '../../../../Context';
import { Layout } from '../../../../GeneralComponents/Layout';
import { StackItem } from './Components/StackItem';
import './styles.css'

const HomeStack = () => {
    const context = useContext(MostroDevContext)

    return (
        <Layout>
            <div className='section-stack'>
                {context.stackItems.map((item, index) => (
                    <StackItem
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        logos={item.logos}/>
                ))}
            </div>
        </Layout>
    )
}

export { HomeStack };