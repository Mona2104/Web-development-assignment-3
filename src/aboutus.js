import rest from './assets/food world.png'
import './App.css'
const About = () => {
    return (  
        
        <section className="section1">
            <img  className="img" src={rest} alt="img" />
                <p>
                Welcome to the official website of food-world and take a deep dive into a realm of mouth-watering, lip-smacking delicacies. Food-world is a culmination of dishes pertaining to different cuisines</p>.
                <div className="about1">
                    <h2>AUTHENTIC RECIPES</h2>
                    <p>Our dishes are based on traditional home-style recipes, made to give you an experience of authenticity using fresh ingredients and no preservatives or chemicals.</p>
                </div>
                <div className="about2"><h2>HONESTLY PRICED</h2>
                <p>
                We constantly strive to offer the best products at the right prices.
                </p>
                </div>
                <div className="about3">
                    <h2 >
                    COMMITTED TO QUALITY
                    </h2>
                    <p>
                    From our ingredients to our kitchen operations & guest services, we always prioritize quality.
                    </p>
                </div>
            
        </section>
    );
}
 
export default About;