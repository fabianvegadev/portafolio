import { Layout } from '../../Components/Layout';
import { StackItem } from '../../Components/StackItem';
import './styles.css'

const Stack = () => {

    return (
        <Layout className='section-stack'>
            {stackItems.map((item, index) => (
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