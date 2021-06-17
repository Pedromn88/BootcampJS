import * as client from "./data-business";
import * as clientElement from "./client-business";

function printClientsAccounts() {
  const clients = client.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = clientElement.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

export { printClientsAccounts };