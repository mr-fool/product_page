Vue.component('product', {
	template: `
	<div id="product">
		<div class="product-image">
			<img v-bind:src="image">
		</div>

	<div class="product-info">
		<h1>{{title}}</h1>
		<p v-if="inStock">In Stock</p>
		<p v-else>Out of Stock</p>

		<ul>
			<li v-for="detail in details">{{detail}}</li>
		</ul>

		<div v-for="(variant, index) in variants" 
			:key="variant.variantId"
			class="color-box"
			:style="{backgroundColor: variant.variantColor}"
			@mouseover="updatePrduct(index)"
			>
			
	</div>

	<button v-on:click="addToCart" 
		:disabled="!inStock"
		:class="{disabledButton: !inStock}"
		>
		Add to Cart</button>

	<div class="cart">
		<p>Cart({{ cart }})</p>
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
		  addToCart: function () {
			  this.cart++;
		  },
		  updatePrduct: function (index) {
			  this.selectedVariant = index;
			  console.log(index);
		  }
	  },
	  computed: {
		  title() {
			  return this.brand + " " + this.product;
		  },
		  image() {
			  return this.variants[this.selectedVariant].variantImage;
		  },
		  inStock() {
			  return this.variants[this.selectedVariant].variantQuantity;
		  }
	  }
})


var app = new Vue({
	el: "#app",
	data: {
		premium: true
	}
	
})