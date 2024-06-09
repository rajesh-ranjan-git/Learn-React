import AddToCartIcon from "../assets/icons/cart.jpg";

const ListItem = () => {
  return (
    <div>
      <img src="/assets/placeholder.png" alt="Some Title" />
      <div>
        <div>
          <span>₹340</span>
          <small>
            <strike>₹450</strike>
          </small>
        </div>
        <div>
          <h3>TItle of the Item</h3>
        </div>
        <button>
          <span>Add to Cart</span>
          <img src={AddToCartIcon} alt="CartIcon" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
