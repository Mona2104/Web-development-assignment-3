import fb from './assets/fb.png'
import linkedin from './assets/linked in.png'
import insta from './assets/insta.jpeg'
import './App.css'
const Footer = () => {
    return (
        <div className="container">
            <div className="company">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Review</a></li>
                </ul>
            </div>
            <div className="gethelp">
             <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Payment Options</a></li>
             </ul>
            </div>
            <div className="Onlineshop">
                <div className="logos">
                    <a href="#"><img className='fb' src={fb} alt="fb"/></a>
                    <a href="#"><img className="linkedin"src={linkedin} alt="linked in" /></a>
                    <a href="#"><img  className="insta"src={insta} alt="insta"/></a>
                </div>
            </div>
        </div>
      );
}
 
export default Footer;