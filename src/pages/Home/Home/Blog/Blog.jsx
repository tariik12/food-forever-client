import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import PDFFile from '../../../../pdf/PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blog = () => {
  return (
    <Container className='my-5 p-5'>
      <div className='p-2 w-25 ms-auto d-flex justify-content-end'>
        <PDFDownloadLink document={<PDFFile />} fileName="example.pdf">
          {({ blob, url, loading, error }) =>
            loading ? <Button variant="info">Loading document...</Button> : <Button variant="info" className='border'>Download PDF!</Button>
          }
        </PDFDownloadLink>
      </div>

      <Card className='p-4'>
        <Card.Title>1. What is the differences between uncontrolled and controlled components?</Card.Title>
        <Card.Body>
          <Card.Text>
            Uncontrolled components are managed by the browser, while controlled components are managed by the application code. <br />
            Uncontrolled components have their own internal state that is managed automatically by the browser, while the state of controlled components is managed explicitly by the application code. <br />
            Updates to the state of uncontrolled components are handled automatically by the browser, while updates to the state of controlled components must be handled explicitly by the application code.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-4'>
        <Card.Title>2. How to validate React props using PropTypes?</Card.Title>
        <Card.Body>
          <Card.Text>
            In React, to validate React props using PropTypes, you need to import the PropTypes package, define the propTypes object with the desired type and shape for your props, and use the props in your component as usual. PropTypes will automatically validate the props and provide a warning if they are of the wrong type or shape.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-4'>
        <Card.Title>3. How to validate React props using PropTypes?</Card.Title>
        <Card.Body>
          <Card.Text>
            In React, PropTypes is a package that allows you to specify the type and shape of the props that a component should receive. It provides a way to validate the props passed to a component, ensuring that they are of the correct type and format.
            To validate React props using PropTypes, you need to import the PropTypes package, define the propTypes object with the desired type and shape for your props, and use the props in your component as usual. PropTypes will automatically validate the props and provide a warning if they are of the wrong type or shape.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='p-4'>
        <Card.Title>4. What is a custom hook, and why will you create a custom hook?</Card.Title>
        <Card.Body>
          <Card.Text>
            In React, a custom hook is a reusable function that encapsulates common logic and can be shared between multiple components. Custom hooks are created using the use prefix, just like the built-in hooks provided by React e.g., useState, useEffect, useContext, etc. Custom hooks allow you to abstract away complex logic and reuse it across different parts of your application. <br />
            A custom hook is just a JavaScript function that uses one or more of the built-in React hooks. It can also use other JavaScript functions and APIs, such as fetch or localStorage. The custom hook should return an array or object with the values or functions that you want to expose to your components.
          </Card.Text>
        </Card.Body>
    </Card>
</Container>

)}
    
export default Blog;
