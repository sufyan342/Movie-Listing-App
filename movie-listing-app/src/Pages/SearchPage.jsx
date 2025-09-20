import { useState } from "react";
import { searchQuery } from "../Services/omdb";

export default function SearchPage() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!search.trim()) return;

    setLoading(true);
    setError(null);

    try {
        const data = await searchQuery(search);

        if (data == []) {
            setError("Empty response");
            setResult(data);
        }
    } catch (err) {
        setResult([]);
        setError(`Something went wrong: ${err.message || err}`);
    } finally {
        setLoading(false);
    }


    }
    

    return (
        <div>
            <input 
                type="text"
                placeholder="Search movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}  
            />

            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}