using BackendApi.Models;

namespace BackendApi.Data {
    public class CustomStorage {

        private List<Clients>? _clients;
        public List<Clients> Clients {
            get {
                if (_clients != null) {
                    return _clients;
                }

                return new();
            }
            set {
                if (_clients == null)
                    _clients = value;
            }
        }

        public CustomStorage() {
            this._clients = new();
        }

        public Clients GetClientById(int id) {

            Clients? client = Clients.Find(i => i.Id == id);

            if (client == null)
                throw new ArgumentException($"Id: {id} does not exist");

            return client;
        }

        public bool RemoveClientById(int id) {

            var client = GetClientById(id);
            return Clients.Remove(client);
        }

        public bool AddClient(Clients client) {
            
            if (client != null) {
                Clients.Add(client);
                return true;
            }

            return false;
        }

        public List<Clients> GetAll() {
            return this.Clients;
        }


    }
}