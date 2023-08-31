import getusers from "../../../../services/getusers";

export default async function page(props) {
  const userList = await getusers();
  const users = await userList;
  const currentId = props.params.userId;
  const userData = users[currentId - 1];
  //   console.log(userData);

  return (
    <div className="m-32">
      <h2>ID: {userData.id}</h2>
      <h2>Name: {userData.name}</h2>
      <h2>website: {userData.website}</h2>
    </div>
  );
}

export async function generateStaticParams() {
  const userList = await getusers();
  const users = await userList;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
