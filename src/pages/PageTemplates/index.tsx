import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

type TemplateType = {
    children: React.ReactNode,
}

const PageTemplate = (props:TemplateType) => {
    return (
        <div className="wrapper">
            <Header />
            <div className='content'>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default PageTemplate;