import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to="/foo">Go to "foo" page</Link>
        </li>
      </ul>
    </>
  );
}
