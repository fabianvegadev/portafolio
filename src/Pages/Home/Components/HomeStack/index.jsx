import { stackItems } from '../../../../Data/StackItems';
import { CustomLink } from '../../../../GeneralComponents/CustomLink';
import { Layout } from '../../../../GeneralComponents/Layout';
import { paths } from '../../../../Routes/Paths';
import { StackItem } from './Components/StackItem';
import './styles.css';

const HomeStack = () => {

    return (
        <Layout>
            <h2>Stack</h2>
            <div className='section-stack-items-container'>
                {stackItems.map((item, index) => (
                    <StackItem key={index} {...item}/>
                ))}
            </div>
            <CustomLink to={paths.skills}>
                <button>Ver mas...</button>
            </CustomLink>
        </Layout>
    )
}

export { HomeStack };