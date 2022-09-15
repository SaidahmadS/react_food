import { 
    coldDishes, 
    hotDishes,
    soup,
    grill,
    appetizer,
    dessert
} from "../../../data/Dishes";
import MainSortItem from "./MainSortItem";
import { useContext } from "react";
import { FoodContext } from "../../../FoodContext/FoodContext";
import './MainSort.scss'

function MainSort() {
    const { activePath, searchInput, val } = useContext(FoodContext)

    let arr = []
    if(activePath === '/homepage/colddishes') {
        arr = coldDishes
    } else if(activePath === '/homepage/soup') {
        arr = soup
    } else if(activePath === '/homepage/grill') {
        arr = grill
    } else if(activePath === '/homepage/appetizer') {
        arr = appetizer
    } else if(activePath === '/homepage/dessert') {
        arr = dessert
    } else {
        arr = hotDishes
    }

    if(val === 'name') {
        arr.sort((a, b) => {
            let nameA = a.foodName.toLowerCase()
            let nameB = b.foodName.toLowerCase()
            if(nameA < nameB) return -1;
            if(nameA > nameB) return 1;
            else return 0
        })
    } else if(val === 'price') {
        arr.sort((a, b) => {
            return Number((a.foodPrice + '')) - Number((b.foodPrice + ''))
        })
    } 

    let rows = []
    arr.forEach(food => {
        if(food.foodName.toLowerCase().indexOf(searchInput.toLowerCase()) === -1) {
            return
        }
        rows.push(food)
    })


    return (  
        <div className="main-sort">
            {rows.map((item, index) => (
                <MainSortItem item={item} key={index} />
            ))}
        </div>
    );
}

export default MainSort;