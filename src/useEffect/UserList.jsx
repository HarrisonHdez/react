import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.address.city}, {user.address.street}, {user.address.suite}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;

//* En este ejercicio, vamos a construir una aplicación sencilla que muestre una lista de usuarios obtenida desde una API. La aplicación mostrará el nombre y la dirección de cada usuario en la lista.

//* Para hacer esto, puedes seguir los siguientes pasos:

//* Crea un componente llamado UserList que reciba un arreglo de usuarios como prop.

//* Dentro del componente UserList, utiliza el hook useEffect para hacer una llamada a una API que devuelve una lista de usuarios. Puedes usar la API pública de JSONPlaceholder para obtener datos de prueba. La URL para obtener una lista de usuarios es: https://jsonplaceholder.typicode.com/users.

//* Utiliza el método fetch para hacer la llamada a la API y almacenar la respuesta en un estado local utilizando el hook useState.

//* Dentro del hook useEffect, asegúrate de que la llamada a la API se haga solo una vez, utilizando un arreglo vacío como segundo argumento. De esta forma, la llamada a la API solo se hará una vez cuando el componente se monte en el DOM.

//* Utiliza un método de renderizado condicional para mostrar un mensaje de "Cargando" mientras se espera la respuesta de la API, y luego muestra la lista de usuarios una vez que la respuesta ha sido recibida.

//* En el método de renderizado, mapea el arreglo de usuarios recibido como prop y muestra el nombre y la dirección de cada usuario en la lista.