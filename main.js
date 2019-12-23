var app = new Vue({
	el: "#app",
	data: {
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