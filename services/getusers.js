export default async function getusers() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
}
