function getProductsOfAllIntsExceptAtIndex(list) {
    return list.map((listValue, listIndex) => {
      return list
        .filter((filterValue, filterIndex) => listIndex != filterIndex)
        .reduce((previousValue, filterValue) => previousValue * filterValue);      
    });
}
