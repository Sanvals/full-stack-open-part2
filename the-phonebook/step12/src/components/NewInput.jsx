const NewInput = ({text, onChange}) => {
    // console.log(text, handler)
    return (
      <div>
        {text}: <input onChange={onChange}/>
      </div>
    )
}

export default NewInput