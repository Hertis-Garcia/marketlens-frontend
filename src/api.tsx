import axios from 'axios';
import type { CompanySearch } from './company';

interface SearchResult {
    data: CompanySearch[];
    
}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResult>(
            `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message: ', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
};