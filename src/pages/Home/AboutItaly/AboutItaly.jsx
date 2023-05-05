import React from 'react';
import { Card } from 'react-bootstrap';

const AboutItaly = () => {
  return (
    <div className='my-4'>
      <h1 className='text-center p-5'>ITALIAN COOKING SCHOOLS</h1>
      <Card className='p-4'>
        <Card.Body>
          <Card.Text>
            Would you like to learn more about traditional Italian cooking? Why not schedule your next vacation around a cooking school in Italy? There are many cooking schools available in regions across Italy, with varying prices and instructors. Here are just a few:

            <br /><br />

            - Chef Paolo Monti: Hotelier, Chef, and Self Styled Gourmet, will teach you how to prepare delicious gourmet Italian dishes in only a few minutes.

            <br /><br />

            - Badia a Coltibuono: This medieval Benedictine abbey in Tuscany is now a prestigious wine estate and cooking school. Two programs are offered: Tastes of Tuscany: A Gastronomic Sojourn in Chianti and Cooking Classes at Badia a Coltibuono. Guests stay in comfortable rooms and have access to various amenities.

            <br /><br />

            These are just a few examples of cooking schools in Italy. Whether you learn from famous Italian chefs or native Italians who want to share their passion for Italian cuisine, you're sure to have an unforgettable experience.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutItaly;
