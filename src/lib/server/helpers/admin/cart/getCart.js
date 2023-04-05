import Cart from "@/lib/server/models/Cart";
import Product from "@/lib/server/models/Product";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";

export default async function (req, res) {
	try {
		const { userEmail } = req.query;

        const profile = await ProfileInfo.findOne({ email: userEmail });
        
        const user = await User.findById(profile.userId);
        
		const cart = await Cart.findById(user.cartId);

		const productIds = cart.products.map((product) => product.productId);

		const products = await Product.find({ _id: { $in: productIds } });

		res.status(200).json({ cart, products });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
