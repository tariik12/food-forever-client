
import Banner from '../Banner/Banner';
import AboutItaly from '../AboutItaly/AboutItaly';
import Categories from '../Categories/Categories';
import { Card, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import Marquee from "react-fast-marquee";

const Home = () => {
            const data = useLoaderData();
          console.log(data)
            
    return (
        <>
            <Banner></Banner>
                
            <Container className=' mx-auto mt-5'>
            <Marquee speed={200} >

                <h1 className='fs-1 font-bold  p-5 mx-auto text-center  text-info'>Italian Top Chef</h1>
                <h1 className='fs-1 font-bold  p-5 mx-auto text-center  text-info'>Italian Top Chef</h1>
                <h1 className='fs-1 font-bold  p-5 mx-auto text-center  text-info'>Italian Top Chef</h1>
</Marquee>
            
            <Row xs={1} md={3} className="g-4">
            {data.map((da,index)=><Chefs da={da} key={index}></Chefs>)}
            </Row>
            </Container>
            
            <Container className='mt-5'>
            <Marquee speed={200} >

<h1 className='fs-1 font-bold  p-5 mx-auto text-center  text-info'>Italian Best Delicious Recipes</h1>
<h1 className='fs-1 font-bold  p-5 mx-auto text-center  text-info'>Italian Best Delicious Recipes</h1>
<h1 className='fs-1 font-bold  p-5 mx-auto text-center  text-info'>Italian Best Delicious Recipes</h1>
</Marquee>
            <Row xs={1} md={3} className="g-4">
                
            <Categories></Categories>
            </Row>
            </Container>
          
            <AboutItaly></AboutItaly>
        </>
    );
};

export default Home;