settings = {
    //Model Popup
    objModalPopupBtn: ".modalButton",
    objModalCloseBtn: ".overlay, .closeBtn",
    objModalDataAttr: "data-popup"
}  
  $(settings.objModalPopupBtn).bind("click", function () {
        if ($(this).attr(settings.objModalDataAttr)) {

            var strDataPopupName = $(this).attr(settings.objModalDataAttr);

            
            //Fade In Modal Pop Up
            $(".overlay, #" + strDataPopupName).fadeIn();

        }
    });

    //On clicking the modal background
    $(settings.objModalCloseBtn).bind("click", function () {
        $(".modal").fadeOut();
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Select relevant elements
        const quantityLabel = document.querySelector('.quantity label');
        const priceLabel = document.querySelector('.price.small');
        const cartSubtotal = document.querySelectorAll('.checkout .details span')[1];
        const discountLabel = document.querySelectorAll('.checkout .details span')[3];
        const shippingLabel = document.querySelectorAll('.checkout .details span')[5];
        const totalLabel = document.querySelector('.checkout .checkout--footer label.price');
        const applyCouponInput = document.querySelector('.coupons .input_field');
        const applyCouponButton = document.querySelector('.coupons button');
        const checkoutButton = document.querySelector('.checkout-btn');
      
        let quantity = 1; // Default quantity
        let price = 23.99; // Default price
        let discount = 0.00; // Default discount
        let shipping = 4.99; // Default shipping
      
        // Update quantity, price, and total
        function updateValues() {
          quantityLabel.textContent = quantity;
          priceLabel.textContent = `$${(price * quantity).toFixed(2)}`;
          cartSubtotal.textContent = `$${(price * quantity).toFixed(2)}`;
          totalLabel.textContent = `$${(price * quantity - discount + shipping).toFixed(2)}`;
        }
      
        // Event listener for the plus button
        document.querySelector('.quantity button:first-of-type').addEventListener('click', function () {
          
          if (quantity > 1) {
            quantity--;
            updateValues();
          }
        });
      
        // Event listener for the minus button
        document.querySelector('.quantity button:last-of-type').addEventListener('click', function () {
          quantity++;
          updateValues();
        });
    
        // Event listener for checkout button
        checkoutButton.addEventListener('click', function () {
            window.location.href = '../comfirm.html';
        });
      
        // Initial update of values
        updateValues();
      });
      