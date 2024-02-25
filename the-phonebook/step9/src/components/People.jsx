const People = ({id, name, number, onDelete}) => {
    // console.log(id, name, number)
    const handleDelete = () => {
      onDelete(id)
    }
    return (
      <>
      <div>
        {name}: {number}
        <button onClick={handleDelete}>delete</button>
      </div>
      </>
    )
}

export default People