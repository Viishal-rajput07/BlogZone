import Link from "next/link";
import getusers from "../../../services/getusers";

export default async function page() {
  const userList = await getusers();
  const users = await userList;
//   console.log(users);
  return (
    <div className="m-20 text-xl">
      {users.map((user) => (
        <h3 key={user.id} >
          <Link href={`users/${user.id}`} className="m-2">{user.name}</Link>
        </h3>
      ))}
    </div>
  );
}
