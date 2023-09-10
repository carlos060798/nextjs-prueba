import Users from "@/components/Users";
import FetchData from "@/app/helpers/FetchUsers";

async function IndexPages() {
  const users= await  FetchData();

  return (<>
  
       <Users users={users}/>

  </>  );
}

export default IndexPages;