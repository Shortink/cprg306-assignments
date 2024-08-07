

export default function Item ({foodObj, onSelect}) {

    let {id, name, quantity, category} = foodObj;


    return(
        <div className="m-4 bg-cyan-50 p-2 w-80 border border-black hover:bg-cyan-700">
            <ul onClick={() => onSelect(name)}>
                <li key={id}>{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}