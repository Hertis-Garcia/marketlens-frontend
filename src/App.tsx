import { useState, useEffect, type ChangeEvent, type SyntheticEvent } from "react";

import CardList from "./Components/CardList/CardList";
import Search from "./Components/SearchBar/Search";
import type { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  
  useEffect(() => {
    if (!search.trim()) {
      setSearchResult([]);
      setServerError("");
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      setServerError("");

      try {
        const companyResult = await searchCompanies(search);

        if (typeof companyResult === "string") {
          setServerError(companyResult);
        } else if (Array.isArray(companyResult.data)) {
          setSearchResult(companyResult.data);
        } else {
          setServerError("An unexpected error occurred");
        }
      } catch {
        setServerError("Failed to fetch companies");
      } finally {
        setIsLoading(false);
      }
    }, 400); 

    return () => clearTimeout(timeoutId);
  }, [search]);

  
  const onSearchSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="App">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />

      {isLoading && <p>Loading...</p>}
      {serverError && <h1>{serverError}</h1>}

      <CardList
        searchResults={searchResult}
        onPortFolioCreate={onPortfolioCreate}
      />
    </div>
  );
}

export default App;
