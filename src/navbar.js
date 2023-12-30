import cart from './assets/cart.png'
const Navbar = () => {
    return (
    <nav className="navbar">
    <div className="header">  
    <h2> Food World</h2>
    </div>
    <div className="links">
    <a id="home" href="#">Home</a>
        <a id="abt" href="#">About</a>
        <a id="menu" href="#">Menu</a>
        <a id="review" href="#">Review</a>
        <a a href="#"><img id="cart" className="cart" src={cart} alt="cart"/></a>
        </div>
     </nav>
    );
}
 
export default Navbar
;