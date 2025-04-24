import { useState } from "react"

function App() {
  const [users,steUser]=useState("");

  return (
    <>
      <h1>Répertoire Utilisateur</h1>
      <ul>
        <li>Nom</li>
        <li>Prénom</li>
        <li>Téléphone</li>
      </ul>
      <div>{users}</div>
      <button>Mettre à jour</button>
      <button>Favoris</button>
    </>
  )

}
export default App
