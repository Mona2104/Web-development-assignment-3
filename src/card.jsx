import gnocchi from './assets/chole bhature.jpeg'
import pizza from './assets/pizza.jpeg'
import salad from './assets/salads.jpeg'
import './card.css'
function Card(){

    
    return(
        <div className="card">
            <div className="card1">
            <img className='card1-image'  src={gnocchi} alt="pasta" />
            <h2 className='card1-title'>Indian Delicacies</h2>
            <p className='card1-text'>Our restaurant serves a plethora of Indian dishes to take you through a culinary experience of a lifteime.We provide numerous Indian dishes from different states to make you feel like home.</p>
            <br/>
            <button className="button1">Order Now</button>
            </div>
            <div className="card2">
                <img className='card2-image' src={pizza} alt="pizza" />
                <h2 className="card2-title">Italian Eateries</h2>
                <p className="card2-text">Mouth watering recipes that take you through an Italian experience.Our pizzas are filled with goodness of mozarella cheese,olives,pepperoni,and delicious sauces. </p>
                <br/>
                <br/>
                <br/>
                  <button className="button1" >Order Now</button>
            </div>
            <div className="card3">
                <img className='card3-image' src={salad} alt="salad" />
                <h2 className="card3-title">Healthy salads</h2>
                <p className="card3-text">We have salads for the health lovers-ranging from green salads to fruit salads,and many more exciting recipes </p>
                <br/>
                <br/>
                <br/>
                  <button  id="button" className="button1">Order Now</button>
            </div>
            
        </div>
    );
}

export default Card