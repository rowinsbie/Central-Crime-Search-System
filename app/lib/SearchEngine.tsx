const  Search = async(e:any) => {
    e.preventDefault();
    const res = await fetch('https://ws-public.interpol.int/notices/v1/red?forename=JOHN&name=&nationality=&ageMax=120&ageMin=18&sexId=&arrestWarrantCountryId=&page=1&resultPerPage=200');
    if(res.ok) {
        console.log(res);
    }
}

export default Search;