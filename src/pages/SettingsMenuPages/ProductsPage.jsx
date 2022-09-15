
import { useState } from "react";
import ProductHeader from "../../components/SettingsProducts/ProductHeader";
import ProductMain from "../../components/SettingsProducts/ProductMain";
import { FoodContext } from "../../FoodContext/FoodContext";

function ProductsPage() {
    const [activeFood, setActiveFood] = useState([])
    const [foods, setFoods] = useState([])

    return (  
        <FoodContext.Provider 
        value={{
            activeFood, setActiveFood,
            foods, setFoods
        }}>
            <div>
                <ProductHeader />
                <ProductMain />
            </div>
        </FoodContext.Provider>
    );
}

export default ProductsPage;