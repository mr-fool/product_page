var app = new Vue({
	el: "#app",
	data: {
	  product: 'Adidas',
	  image: "./assets/black.jpg",
	  inventory: 11,
	  details: ["US size 8", "gopnik style", "male"],
	  variants: [
		{
	
			variantId: 2234,
			variantColor: "white",
			variantImage: "./assets/white.jpg"
		},
		{
			variantId: 2235,
			variantColor: "black",
			variantImage: "./assets/black.jpg"	
		}
	
		],
		cart: 0 
	},
	methods: {
		addToCart: function () {
			this.cart++;
		},
		updatePrduct: function (variantImage) {
			this.image = variantImage;
		}
	}
})