export default function Title({text, intro}){
    return (
        <>
        <h1 className={`sectionTitle fw-bold text-center mb-4`}>
            {text}
        </h1>
        {intro ? ( <p className="text-center mb-5 fw-medium" >{intro}</p> ) : null } 
        </>
    )
}