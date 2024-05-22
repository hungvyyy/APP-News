import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/category'
import articleReducer from './slices/article'
import SettingSliceReducer from './slices/setting'
import priceReducer from './slices/price'
import Viewsreuducer from './slices/Views'


const store = configureStore({
    reducer: {
        Category    : categoryReducer,
        Article     : articleReducer,
        Setting     : SettingSliceReducer,
        Price       : priceReducer,
        Views : Viewsreuducer,
    },
})

export default store

