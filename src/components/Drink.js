import Option from "./generics/Option";

export default function Drink({drink, setDrink, drinkPrice, setDrinkPrice, displayButton}) {
    const options = [
        {
            img: "media/cana.jpg",
            name: "Caldo de cana",
            detail: "Humm, com pastel então",
            price: "2,23"
        }, 
        {
            img: "media/corote.jpg",
            name: "Corote",
            detail: "Pilar de festas universitárias",
            price: "0,99"
        }, 
        {
            img: "media/caja.jpg",
            name: "Suco de cajá",
            detail: "O melhor suco que há",
            price: "5,91"
        }, 
        {
            img: "media/agua.jpg",
            name: "Água",
            detail: "Tem quem diz que faz bem",
            price: "74,82"
        }
    ]
    return (
        <div className="menu drink">
            {options.map((option, index) => {
                return (
                <Option 
                    key={index} 
                    option={option} 
                    item={drink} 
                    setItem={setDrink} 
                    itemPrice={drinkPrice} 
                    setItemPrice={setDrinkPrice} 
                    displayButton={displayButton}
                />
                )
            })}
        </div>
    );
}