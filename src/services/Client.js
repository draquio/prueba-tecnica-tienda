export class Client {
  async getClients() {
    try {
      const response = await fetch("/clients.json");
      const result = await response.json();
      return result;
    } catch (error) {
      return error;
    }
  }

  async searchClients (name) {
    try {
            if (name.length === 0) return []
            const clients = await this.getClients();
            const filteredClients = clients.filter(client => {
                const completeName = client.nombre + " " + client.apellidos;
                if (completeName.includes(name)) {
                    return client;
                }
            })
            return filteredClients;
    } catch (error) {
      return error;
    }
}
}
