

export default function Item ({foodObj}) {

    let {name, quantity, category} = foodObj;


    return(
        <div className="m-4 bg-cyan-50 p-2 w-80 border border-black">
            <ul>
                <li>{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}