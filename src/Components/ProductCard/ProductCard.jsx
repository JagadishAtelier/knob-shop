// components/ProductCard.jsx
import { FaStar, FaHeart } from "react-icons/fa";
import "./ProductCard.css";
import { Navigate, useNavigate } from "react-router-dom";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { useState } from "react";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
    // const [isWishlisted, setIsWishlisted] = useState(false);

  // const toggleWishlist = () => {
  //   setIsWishlisted(!isWishlisted);
  // };
  const {
    id,
    title,
    price,
    oldPrice,
    discount,
    rating,
    icons,
    image,
  } = product;
console.log(icons);
console.log(product);

  return (
   <div className="card product-card h-100 position-relative curser-pointer">
  {discount && (
    <span className="badge bg-dark text-white position-absolute top-0 start-0 m-2">
      {discount}% off
    </span>
  )}

  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center rounded px-2 py-1 rating-overlay">
  <FaStar className="text-warning me-1" size={18} />
  <span className="normal">{rating}</span>
</div>


  <div className="image-wrapper position-relative" onClick={()=>navigate(`/product/${id}`)}>
  <img src={image} alt={title} className="card-img-top default-img" />
  <img src={product.hoverImage} alt={title} className="card-img-top hover-img position-absolute top-0 start-0" />
  {/* <div className="hover-button-wrapper">
    <button className="hover-button">Choose Option</button>
  </div> */}
</div>


  <div className="card-body d-flex flex-column">
   <div className="icons">
    {icons?.length > 0 ? (
      icons.map((icon, index) => (
        <div className="icon" key={index}>
          <img src={icon.imgUrl} alt={icon.name} />
          <span className="tooltip">{icon.name}</span>
        </div>
      ))
    ) : (
      // Render empty placeholders if needed, or leave div empty to preserve space
      null
    )}
    
  </div>
   <hr />
    <div className="mt-2">
    <h5 className="card-title">
      {product.title}
    </h5>

    <p className="mb-2">
     
      <del className="text-muted">
        ₹ {oldPrice.toLocaleString("en-IN")}
      </del>{" "}
       <strong style={{ color: "#D6791F" }}>
        ₹ {(price ? +price : 0).toLocaleString("en-IN")}
      </strong>
    </p>
    <p className="text-success mb-2">
      You Save ₹ {(oldPrice - price).toLocaleString("en-IN")}
    </p>

<div className="product-colors d-flex gap-2 my-2">
  <input type="radio" name="color" className="color-dot brown" />
  <input type="radio" name="color" className="color-dot gray" />
  <input type="radio" name="color" className="color-dot red" />
</div>
<div className="card-buttons mt-3">
  <button className="View-detail" onClick={()=>navigate(`/product/${id}`)}>View Details</button>
  <button className="Addtocart">Add To cart</button>
</div>
    </div>
    {/* <div className="product-colors">
      <span className="color-dot brown"></span>
      <span className="color-dot grey"></span>
      <span className="color-dot red"></span>
      <input type="radio" className="color-dot brown" />
      <input type="radio" className="color-dot gray" />
      <input type="radio" className="color-dot red" />
    </div> */}

    {/* <div className="card-actions mt-auto">
      <button
        className="btn btn-sm"
        style={{
          background: "#B07D51",
          color: "#fff",
          padding: "0.4rem 1.5rem",
          fontSize: "0.75rem",
        }}
      >
        Choose Option
      </button>
      <div onClick={toggleWishlist} className="wishlist-icon-wrapper">
        {isWishlisted ? (
          <AiFillHeart className="wishlist-icon animate" color="#ff002b" />
        ) : (
          <AiOutlineHeart className="wishlist-icon animate" />
        )}
      </div>
    </div> */}
  </div>
</div>

  );
};

export default ProductCard;
