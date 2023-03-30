import Link from "next/link";
export default function Navigation({children}){

  const links = [
    {
      label: "Log In",
      route: "/login",
    },
    {
      label: "Sig Up",
      route: "/sigup",
    },
  ];

    return(
        <nav className="nav-v bg-bl">

            {
                links.map(({label, route})=>(
                    <li className="list" key={route}>
                        <Link className='btn bg-rd m-10' href={route}>
                            {label}
                        </Link>
                    </li>
                ))
            }
            {children}
        </nav>
    );
}