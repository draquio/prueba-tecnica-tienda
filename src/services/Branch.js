export class Branch {
  async getBranchs() {
    try {
      const response = await fetch("/branch.json");
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  }
  async searchBranch(query) {
    try {
      if (query.length === 0) return [];
      const branchs = await this.getBranchs();
      const filteredBranchs = branchs.filter((branch) =>
        branch.nombre.toLowerCase().includes(query.toLowerCase())
      );
      return filteredBranchs;
    } catch (error) {
      return error;
    }
  }
}
