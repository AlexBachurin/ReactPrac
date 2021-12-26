//PAGINATE LOGIC

const paginate = (followers) => {
    //how many items to show on page
    const itemsOnPage = 9;
    //now calculate number of pages, use ceil, so if we get 11.11 we have 12 pages
    const pages = Math.ceil(followers.length / itemsOnPage);

    //now create array of arrays and in each array we will have 9 items, depenging on ItemsOnPage value
    const newFollowers = Array.from({ length: pages }, (_, index) => {
        //starting position will be index * itemsOnPage value, so it will be 
        //0 * 9 = 0, 1*9=9, 2*9 = 18, etc..
        const start = index * itemsOnPage;
        //end position will be start + itemsOnPage
        //0 + 9 = 9, 9 + 9 = 18, 18+9 = 27 etc...
        const end = start + itemsOnPage;
        //now transform our data array into subarrays with length of 9 each using slice method
        //since slice doesnt include last position it will be from 0 to 8, exactly 9 items
        return followers.slice(start, end);
    })
    console.log(newFollowers)
    return newFollowers;

}

export default paginate;