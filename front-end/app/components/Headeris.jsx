import Link from "next/link";
import ImageCarrusel from "./carrusel/ImageCarrusel";


export function Headeris({children}) {

  const links = [
    {
      label: "Registrarse o Iniciar Sección",
      route: "/inputForms",
    },
    {
      label: "Novedades",
      route: "/"
    }
  ];

  return (
    <header className="txt-radio headeri txt-center">
      {children}
      {links.map(({ label, route }) => (
        
        <li className="list w-30  dp-ib" key={route}>
          <Link className="btn bg-bl" href={route}>{label}</Link>
        </li>
      ))}
      
    </header>
  );
}
