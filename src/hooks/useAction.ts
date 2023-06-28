import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { coinsAction } from './../store/products.slice'

const actions = {
	...coinsAction
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}