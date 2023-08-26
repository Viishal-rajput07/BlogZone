export default function Navbar() {
  return (
    <div>
      <nav className="bg-blue-200 flex justify-between items-center">
        <ul className="flex items-center space-x-5 h-16 text-xl font-bold">
          <li></li>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <div className="">
          <button className="btn btn-sm btn-accent">Login</button>
          <button className="btn btn-sm btn-error mx-5">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}
