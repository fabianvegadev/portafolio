import { useContext } from 'react';
import { MostroDevContext } from '../../Context';
import { Layout } from '../../Components/Layout';
import { StackItem } from '../../Components/StackItem';
import './styles.css'

const Stack = () => {
    const context = useContext(MostroDevContext)

    return (
        <Layout className='section-stack'>
            {context.stackItems.map((item, index) => (
                <StackItem
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    logos={item.logos}/>
            ))}
        </Layout>
    )
}

export { Stack };