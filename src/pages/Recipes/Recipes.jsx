import React, { useState } from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Rating } from '@smastrom/react-rating'
import { HiOutlineHeart } from "react-icons/hi";
import '@smastrom/react-rating/style.css'


const Recipes = ({da}) => {
  
  const [Favorite, SetFavorite] = useState(true)
  const {ingredients,recipe_name,image_url,rating,total_likes,cooking_method} =da
  
  const handleFavorite = () =>{
 
    toast(' Wow added Favorite!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    SetFavorite(false)

  }

    return (
        <Col>
        <Card style={{height:'700px'}}>
          <Card.Img variant="top" style={{height:'300px'}} src={image_url} />
          <Card.Body>
            <Card.Title>{recipe_name}</Card.Title>
            <Card.Text>
            </Card.Text>
          <Card.Text className='d-flex '>
          <Card.Text >
          <strong>Ingredients :</strong>
        {
              ingredients.slice(0,5).map((rec,index) =><ListGroup.Item key={index}>{rec}</ListGroup.Item>)
          }

        </Card.Text >
<Card.Text className='w-50 p-2'>
            <strong>Cooking Method :</strong>
{
    cooking_method.slice(0,1).map((rec,index) =><ListGroup.Item key={index}>{rec}..<Card.Link className='text-decoration-none text-info' href="#">Read more »</Card.Link></ListGroup.Item>)
}

</Card.Text>
          </Card.Text>
                
            
          </Card.Body>
           <Card.Footer >
            <Card.Text className='d-flex justify-content-between align-items-center'>
            <Card.Text className='d-flex align-items-center mt-3' >
             {/* {total_likes} */}
             <Rating style={{ maxWidth: 150 }} className='me-2'  value={(rating?.number)} readOnly />
             <span>{rating?.number}</span>
            </Card.Text>
            <Card.Text className='d-flex align-items-center '><HiOutlineHeart style={{height:'40px', width:'50px'}} className='me-2'/>  {total_likes}</Card.Text>
            </Card.Text>
           
             <Button onClick={handleFavorite} className='w-100' variant="info" disabled={!Favorite}>Favorite Recipe</Button>
           </Card.Footer>
        </Card>
      </Col>
    );
};

export default Recipes;