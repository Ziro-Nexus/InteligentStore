import Link from "next/link";


const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
];

export function Header(){
    return(
        <header>
        {
          links.map(({label, route})=>(
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))
        }  
        </header>  

    )
}