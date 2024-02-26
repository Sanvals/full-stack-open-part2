const Result = ({index, name, showInfo}) => {
    const handleShow = () => {
        showInfo(name);
    }
    
    return (
        <>
        <div>{name} <button onClick={handleShow}>show</button></div>
        </>
    )
}

export default Result