import { useEffect,useState } from "react"


function App() {
  const url ="https://randomuser.me/api/?results=10";
  const [users,setUser]=useState([]);
  
const getUsers=  async ()=>{
    const request = await fetch(url);
    const data = await request.json();
    setUser(data.results);
}
useEffect(()=>{
  getUsers();
  },[])

  const toggleFavorite = (index) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { ...user, isFavorite: !user.isFavorite } : user
    );
    setUser(updatedUsers);
  };


  return (
    <>
      <h1>Répertoire Utilisateur</h1>
      <ul>
        {users
          .sort((u1, u2) => u1.name.last.localeCompare(u2.name.last))
          .map((u, index) => (
            <li key={index}>
              {u.name.last} {u.name.first} - {u.phone}{" "}
              <span
                className={`star ${u.isFavorite ? "favorite" : ""}`}
                onClick={() => toggleFavorite(index)}
              >
                &#9733;
              </span>
            </li>
          ))}
      </ul>

      
    </>
  )

}
export default App
