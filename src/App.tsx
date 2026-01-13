import { useState, type ChangeEvent, type SyntheticEvent } from "react";

import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/SearchBar/Search";
import type { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchrResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const companyResult = await searchCompanies(search);
    if (typeof companyResult === "string") {
      setServerError(companyResult);
    } else if (Array.isArray(companyResult.data)) {
      setSearchResult(companyResult.data);
    }
    else {
      setServerError("An unexpected error occurred");
    }
    console.log(companyResult);
  };

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList />
    </div>
  );
}

export default App;
