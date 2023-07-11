import {AsyncPaginate } from "react-select-async-paginate"
import { useState } from "react";
import { GEO_API_URL, geoApioptions } from "./API";


const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(
                `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApioptions
            );
            const response_1 = await response.json();
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        } catch (err) {
            return console.error(err);
        }
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    
    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
    
}

export default Search;