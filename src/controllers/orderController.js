const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
    try {
        // Extract userId from the token (req.user should be set in authentication middleware)
        const userId = req.user.userId; 

        // Extract products and totalAmount from the request body
        const { products, totalAmount } = req.body;

        // Validate that products is an array and not empty
        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ error: "Products array cannot be empty" });
        }

        // Ensure each product has productId and quantity
        const formattedProducts = products.map(p => ({
            productId: p.productId,
            quantity: p.quantity
        }));

        // Create and save the order
        const order = new Order({ userId, products: formattedProducts, totalAmount });
        await order.save();
        
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        // Get user ID from token
        const userId = req.user.userId; 

        // Fetch orders only for the logged-in user
        const orders = await Order.find({ userId });

        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

