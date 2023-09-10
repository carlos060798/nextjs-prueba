// funcion de ayuda para obtener los usuarios de la api

async function FetchData() {
    const response = await fetch('https://reqres.in/api/users');
    const users = await response.json();
    const{data}=users;
    return data;
  }


export default FetchData;