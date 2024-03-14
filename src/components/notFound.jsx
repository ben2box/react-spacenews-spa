import Divider from "./common/divider";

export default function PageNotFound(){
    return (
        <section>
            <div className='loadingContainer container-fluid text-center justify-content-center'>
                <h1> We couldn't find the page you were looking for...</h1>
            </div>
            <Divider/>
        </section>
    )
}
