import axios from "axios";
import { useEffect, useState } from "react";
import { Country } from "./intarface/country";

function App() {
    const [allCountries, setAllCountries] = useState<Array<Country>>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(
                "http://localhost:8080/api/get-all-data"
            );

            setAllCountries(data);
            console.log(data);
        })();
    }, []);

    return (
        <div>{allCountries.length === 0 ? <>No Data Found</> : <>aaa</>}</div>
    );
}

export default App;
