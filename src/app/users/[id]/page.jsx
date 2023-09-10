
import getUser from "@/app/helpers/GetUser";

async function UserPages({ params }) {
  const { id } = params;
  const user = await getUser(id);
  const { data } = user;

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card">
        <img src={data.avatar} alt={data.first_name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
          {data.id}  {data.first_name} {data.last_name}
          </h5>
          <p className="card-text">{data.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserPages;




