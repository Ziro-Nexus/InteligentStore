import ImageSlader from '../carrusel/ImageCarrusel'

export default function ContainerChild({children, classis}){
    
    return(
        <section className={classis}>
           
            {children}

        </section>
    );
}