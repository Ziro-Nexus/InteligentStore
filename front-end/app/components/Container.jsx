
export default function Container({children, classis}){
    return(
        <main className={classis}>

            {children}

        </main>
    );
}