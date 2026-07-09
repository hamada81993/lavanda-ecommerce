import skinCare2 from '../assets/img/skinCare/2.jpg';
/**
 * Cart Service Utility
 * 
 * Abstracted cart operations to manage the shopping cart.
 * Currently uses localStorage for persistence, but is fully ready to be swapped
 * with backend API calls (fetch/axios) later without changing any component logic.
 */

// Custom event dispatched whenever the cart updates
const CART_UPDATE_EVENT = 'cart-updated';
// Helper to dispatch the update event
const dispatchUpdate = () => {
  window.dispatchEvent(new Event(CART_UPDATE_EVENT));
};

export const cartService = {
  /**
   * Retrieves all items currently in the cart.
   */
  getCart: () => {
    try {
      // Initialize with the default item once on first load
      if (!localStorage.getItem('cart_init_v2')) {
        const defaultCart = [{
          id: 'skincare-1-50ml',
          productId: 'skincare-1',
          brand: 'MARY & MAY',
          title: 'Moisturizing Soft Eye Cream',
          category: 'Skincare',
          price: '650 $',
          oldPrice: '$165',
          discount: '-24% OFF',
          quantity: 1,
          size: '50ml',
          image: skinCare2
        }];
        localStorage.setItem('cart', JSON.stringify(defaultCart));
        localStorage.setItem('cart_init_v2', 'true');
        dispatchUpdate();
        return defaultCart;
      }

      // Automatically wipe legacy mock cart items from previous page loads if any exist
    //   if (localStorage.getItem('cart_initialized')) {
    //     localStorage.removeItem('cart_initialized');
    //     localStorage.setItem('cart', '[]');
    //   }
      const rawCart = localStorage.getItem('cart');
      JSON.parse(localStorage.getItem("cart"))
      localStorage.getItem("cart")
      if (!rawCart || rawCart === 'undefined' || rawCart === 'null') {
        return [];
      }
      return JSON.parse(rawCart);
    } catch (e) {
      console.error("Error parsing cart from localStorage", e);
      localStorage.setItem('cart', '[]');
      return [];
    }
  },

  /**
   * Adds a product to the cart.
   * If the product already exists, increments the quantity.
   */
  addToCart: (product, quantity = 1) => {
      console.log("PRODUCT RECEIVED:", product);

    const cart = cartService.getCart();
    const targetSize = product.size || '50ml';
    // Construct unique ID based on product ID and size
const cartItemId = `${product.id}-${targetSize}`;
    const existingIndex = cart.findIndex(item => String(item.id) === cartItemId);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      // Standardize properties to match design
      cart.push({
        id: cartItemId,
        productId: product.id,
        brand: product.brand || 'LAMER',
        title: product.title || 'Product',
        category: product.category || 'Skincare',
        price: product.price || '$0.00',
        oldPrice: product.oldPrice,
        discount: product.discount,
        quantity: quantity,
        image: product.image,
        size: targetSize
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("dispatching cart-updated");
    window.dispatchEvent(new Event("cart-updated"));
    dispatchUpdate();
  },

  /**
   * Removes an item from the cart.
   */
  removeFromCart: (productId) => {
    const cart = cartService.getCart();
    const updatedCart = cart.filter(item => String(item.id) !== String(productId));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    dispatchUpdate();
  },

  /**
   * Updates quantity of an item in the cart.
   */
  updateQuantity: (productId, newQuantity) => {
    if (newQuantity < 1) {
      cartService.removeFromCart(productId);
      return;
    }

    const cart = cartService.getCart();
    const targetIndex = cart.findIndex(item => String(item.id) === String(productId));

    if (targetIndex > -1) {
      cart[targetIndex].quantity = newQuantity;
      localStorage.setItem('cart', JSON.stringify(cart));
      dispatchUpdate();
    }
  },

  /**
   * Toggles the bulk gift wrap option (+$5.00)
   */
  setGiftWrap: (isGiftWrap) => {
    localStorage.setItem('cart_gift_wrap', JSON.stringify(isGiftWrap));
    dispatchUpdate();
  },

  /**
   * Gets the gift wrap selection status
   */
  getGiftWrap: () => {
    return JSON.parse(localStorage.getItem('cart_gift_wrap') || 'false');
  },

  /**
   * Clears the entire cart
   */
  clearCart: () => {
    localStorage.setItem('cart', '[]');
    localStorage.setItem('cart_gift_wrap', 'false');
    dispatchUpdate();
  },

  /**
   * Calculates dynamic totals: Subtotal, Shipping, Tax, and Grand Total
   */
  getTotals: () => {
    const cart = cartService.getCart();
    const hasGiftWrap = cartService.getGiftWrap();
    
    // Parse helper to extract numerical value from price string (e.g. "$89.00" -> 89)
    const parsePrice = (priceStr) => {
      if (!priceStr) return 0;
      const num = parseFloat( String(priceStr).replace(/[^0-9.]/g, ''));
      return isNaN(num) ? 0 : num;
    };

    const subtotal = cart.reduce((sum, item) => {
      return sum + (parsePrice(item.price) * item.quantity);
    }, 0);

    const giftWrapCost = hasGiftWrap ? 5.00 : 0;
    const subtotalWithGift = subtotal + giftWrapCost;

    // Free shipping qualification (orders over $50)
    const shipping = subtotal > 50 ? 0 : 15.00;
    const tax = subtotal * 0.14; // 14% tax from design
    const total = subtotalWithGift + shipping + tax;

    return {
      subtotal,
      giftWrapCost,
      shipping,
      tax,
      total
    };
  },

  /**
   * Retrieves the total count of distinct items in the cart
   */
  getCartCount: () => {
    try {
      const cart = cartService.getCart();
      return cart.reduce((sum, item) => sum + item.quantity, 0);
    } catch (e) {
      console.error("Error getting cart count", e);
      return 0;
    }
  }
};
 