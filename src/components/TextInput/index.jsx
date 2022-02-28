import './style.css'


export const TextInput = ({ searchValue, handleChange }) => {
    {/* Criano inpunt para busca */ }
    return (< input className="title-button"
        value={searchValue}
        onChange={handleChange}
    // evento sintentico onChange
    />

    )
}

