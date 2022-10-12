const StoreData = (key ,data) => {
    localStorage.setItem(key , JSON.stringify(data));
};

const getData = async key => {
    const data = await localStorage.getItem(key);
    return JSON.parse(data);
}

const clearData = () => {
    localStorage.clear();
}


export {StoreData , getData , clearData}