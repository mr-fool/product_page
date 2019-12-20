var app = new Vue({
	el: "#app",
	data: {
	  product: 'Adidas',
	  image: "./logo.png",
	  inventory: 11,
	  details: ["US size 8", "gopnik style", "male"]
	},

	variants: [
	{

		variantId: 2234,
		variantColor: "green"
	},
	{
		variantId: 2235,
		variantColor: "blue"	
	}

	]  
})