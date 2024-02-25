import People from './People'

const FilteredPeople = ({content, search}) => {
    // console.log(content, search)
    const filteredArray = content.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <>
      {
      filteredArray.map(item => <People key={item.id} name={item.name} number={item.number}/>)
      }
      </>
    )
}

export default FilteredPeople