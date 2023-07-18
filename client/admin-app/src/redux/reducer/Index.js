
import customerSlice from "./Customer.Slice";
import categorySlice from "./Category.Slice";
import typeSlice from "./Type.Slice";
import productSlice from "./Product.Slice";
import cartItemSlice from "./CartItem.Slice";
import CartSlice from "./Cart.Slice";
import versionSlice from "./Version.Slice";

export const rootReducer = {
  customer: customerSlice,
  category: categorySlice,
  type: typeSlice,
  product: productSlice,
  cartItem: cartItemSlice,
  cart: CartSlice,
  version: versionSlice,
};
