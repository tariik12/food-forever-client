
import Banner from '../Banner/Banner';
import AboutItaly from '../AboutItaly/AboutItaly';
import Categories from '../Categories/Categories';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';

const Home = () => {
            const data = useLoaderData();
          console.log(data)
            
    return (
        <div>
            <Banner></Banner>
            <Row xs={1} md={3} className="g-4">

            {data.map((da,index)=><Chefs da={da} key={index}></Chefs>)}
            </Row>
            
            <Categories></Categories>
            <AboutItaly></AboutItaly>
        </div>
    );
};

export default Home;