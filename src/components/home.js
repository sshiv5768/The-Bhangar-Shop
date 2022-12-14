import "../style/home.css";
import iron from "../images/iron.jpeg"
import paper from "../images/paper.jpg"
import cartoon from "../images/cartoonbox.jpeg"
import plastic from "../images/plastic.jpg"
function Home() {
return (
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <h1>Bhangar Shop</h1>
  <p>
    Bhangar Prices at <a href="#">Dhora ka Shyam Pasti Bhandar Shop </a>
  </p>
  <div class="container">
    <div class="image-grid">
      <figure>
        <img src={iron} alt="iron" />
        <p>लोहा</p>
        <p>Price: 30/kg</p>
      </figure>
      <figure>
        <img src={paper} alt="paper" />
        <p>अखबार की रद्दी</p>
        <p>Price: 23/kg</p>
      </figure>
      <figure>
        <img src={cartoon} alt="cartoon box" />
        <p>कार्टून बॉक्स</p>
        <p>Price: 13/kg</p>
      </figure>
      <figure>
        <img src={plastic} alt="plastic" />
        <p>प्लास्टिक</p>
        <p>Price: 14/kg</p>
      </figure>
    </div>
  </div>
</div>
);
}

export default Home;