//  se usa use client para hacer la peticion a la api y que se guarde en la constante users
"use client";
import { useRouter } from "next/navigation"; // para hacer la navegacion entre paginas
function Users({users}) {
  //PARA HACER EL ROUTING ENTRE PAGINAS POR CADA USUARIO
  const router = useRouter();
   
    return ( <>
     <div>
      <ul className="list-group">
        { users.map((user) => {
          return (
            <li 
            key={user.id} 
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            onClick={()=>
            router.push(`/users/${user.id}`)
            }>
              <p>{user.id}</p>
              <p>{user.first_name} {""} {user.last_name}</p>
              <p>{user.email}</p>
              <img src={user.avatar} alt={user.first_name}/>
            </li>
          )
        })



        }


      </ul>
    </div>
    </> );
}

export default Users;