const ShowQuery = ({info}) => {
    const {name, capital, area, languages, flags} = info
    return (
        <>
        <h2>{name.common}</h2>
        <div>capital {capital}</div>
        <div>area {area} km²</div>
        <h3>languages</h3>
        <ul>
            {Object.entries(languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
        </ul>
        <div><img src={flags.png}></img></div>
        </>
    )
}

export default ShowQuery