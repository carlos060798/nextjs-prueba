
async function getUser(userid) {
    const response = await fetch(`https://reqres.in/api/users/${userid}`);
    const data = await response.json();

  return data;
}

export default getUser;