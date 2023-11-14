const Car = ({car}) => {
    const {id, brand, price, year }=car
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>yer: {year}</div>
        </div>
    );
};

export {Car};