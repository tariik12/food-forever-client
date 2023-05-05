import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const PDFFile = () => {

    const styles = StyleSheet.create({
        page: {
          padding: 20,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
        },
        body: {
          fontSize: 12,
          marginBottom:20
        },
      });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text  style={styles.title}>1. What is the differences between uncontrolled and controlled components?</Text>
          <Text style={styles.body}>
            Uncontrolled components are managed by the browser, while       controlled components are managed by the application code. <br />
            Uncontrolled components have their own internal state that is managed automatically by the browser, while the state of controlled components is managed explicitly by the application code. <br />
            Updates to the state of uncontrolled components are handled automatically by the browser, while updates to the state of controlled components must be handled explicitly by the application code.
            </Text>
        </View>
        <View>
          <Text  style={styles.title}>2. How to validate React props using PropTypes?</Text>
          <Text style={styles.body}>
          In React, to validate React props using PropTypes, you need to import the PropTypes package, define the propTypes object with the desired type and shape for your props, and use the props in your component as usual. PropTypes will automatically validate the props and provide a warning if they are of the wrong type or shape.
            </Text>
        </View>
        <View>
          <Text  style={styles.title}>3. How to validate React props using PropTypes?</Text>
          <Text style={styles.body}>
            In React, PropTypes is a package that allows you to specify the type and shape of the props that a component should receive. It provides a way to validate the props passed to a component, ensuring that they are of the correct type and format.
            to validate React props using PropTypes, you need to import the PropTypes package, define the propTypes object with the desired type and shape for your props, and use the props in your component as usual. PropTypes will automatically validate the props and provide a warning if they are of the wrong type or shape.
            </Text>
        </View>
        <View>
          <Text  style={styles.title}>4. What is a custom hook, and why will you create a custom hook?</Text>
          <Text style={styles.body}>
          In React, a custom hook is a reusable function that encapsulates common logic and can be shared between multiple components. Custom hooks are created using the use prefix, just like the built-in hooks provided by React e.g., useState, useEffect, useContext, etc. Custom hooks allow you to abstract away complex logic and reuse it across different parts of your application. <br />
   
   A custom hook is just a JavaScript function that uses one or more of the built-in React hooks. It can also use other JavaScript functions and APIs, such as fetch or localStorage. The custom hook should return an array or object with the values or functions that you want to expose to your components.
            </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
