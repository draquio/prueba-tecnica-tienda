export class Product {
  async getProducts() {
    try {
      const response = await fetch("/products.json");
      const result = await response.json();
      return result;
    } catch (error) {
        return error;
    }
  }

  async searchProducts(name) {
    try {
      if (name.length === 0) return [];
      const products = await this.getProducts();
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      return filteredProducts;
    } catch (error) {
      return error;
    }
  }
}
