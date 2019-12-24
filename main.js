Vue.component('product', {
	props: {
	  premium: {
		type: Boolean,
		required: true
	  }
	},
	template: `
	<div id="product">
	
	  <div class="product-image">
	  <img :src="image" />      
	  </div>
	  
	  <div class="product-info">
		<div class="cart">
		  <p>Cart({{ cart }})</p>
		</div>
	  
		<h1>{{ title }}</h1>
		<p>Shipping: {{ shipping }}</p>
		
		<p v-if="inStock">In Stock</p>
		<p v-else>Out of Stock</p>
		
		<h2>Details</h2>
		<ul>
		  <li v-for="detail in details">{{ detail }}</li>
		</ul>
		<h3>Colors:</h3>
		<div v-for="variant in variants" :key="variant.variantId">
		  <div class="color-box" :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)"></div>
		</div>
		<button :class="{ disabledButton: !inStock }" v-on:click="addToCart" :disabled="!inStock">Add to Cart</button>
	  </div>
	</div>
	`,
	data() {
		return {
		product: 'Shoes',
		brand: "Adidas",
		selectedVariant: 0,
		details: ["US size 8", "gopnik style", "male"],
		variants: [
		  {
	  
			  variantId: 2234,
			  variantColor: "white",
			  variantImage: "./assets/white.jpg",
			  variantQuantity: 10
		  },
		  {
			  variantId: 2235,
			  variantColor: "black",
			  variantImage: "./assets/black.jpg",
			  variantQuantity: 0
		  }
	  
		  ],
		  cart: 0 
	  }
	},
	methods: {
	  addToCart() {
		this.cart += 1
	  },
	  updateProduct(index) {
		this.selectedVariant = index
	  }
	},
	computed: {
	  title() {
		return this.brand + ' ' + this.product
	  },
	  image() {
		return this.variants[this.selectedVariant].variantImage
	  },
	  inStock() {
		if (this.quantity > 0) {
		  return true
		} else {
		  return false
		}
	  },
	  shipping() {
		if (this.premium) {
		  return "Free"
		} else {
		  return 2.99
		}
	  }
	}
  })
  
  var app = new Vue({
	el: '#app',
	data: {
	  premium: true
	}
  })