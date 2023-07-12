import demoSlice from "./Demo.Slice";
import customerSlice from "./Customer.Slice";
import categorySlice from "./Category.Slice";
import typeSlice from "./Type.Slice";

export const rootReducer = {
  demo: demoSlice,
  customer: customerSlice,
  category: categorySlice,
  type: typeSlice,
};
