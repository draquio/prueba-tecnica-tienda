export const verifyProduct = (products, product) => {
  if (products.some((item) => item.id === product.id)) {
    return true;
  }
  return false;
};
export const calculateSubTotal = (quantity, price) => {
  return quantity * price;
};

export const CanCreateInput = (productslength, inputslength) => {
  return productslength === inputslength;
};

export const calculateTotal = (products) => {
    const total = products.reduce((accumulator, product) => {
        return accumulator + product.subtotal;
    }, 0);
    return total
}