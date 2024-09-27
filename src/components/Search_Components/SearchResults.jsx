import React, { useContext } from 'react'
import { searchContext } from '../../Context/SearchContext/SearchContext';
import SearchCard from './SearchCard';
import { Grid, Text } from '@chakra-ui/react';

const SearchResults = () => {
    const { searchResults } = useContext(searchContext);
    console.log("searchResults------", searchResults);

    return (
        <>
            {Array.isArray(searchResults) && searchResults.length > 0 ? (
                <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                    {searchResults.map((item) => (
                        item && <SearchCard key={item.id} item={item} />
                    ))}
                </Grid>
            ) : (
                <Text>No Items Found</Text>
            )}
        </>
    );
};

export default SearchResults
