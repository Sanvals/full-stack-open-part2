import People from './People'

const FilteredPeople = ({content, search, onDelete}) => {
    // console.log(content, search)
    const filteredArray = content.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <>
      {
      filteredArray.map(item => 
        <People 
          id={item.id}
          key={item.id} 
          name={item.name} 
          number={item.number}
          onDelete={onDelete}
        />
      )
        }
      </>
    )
}

export default FilteredPeople