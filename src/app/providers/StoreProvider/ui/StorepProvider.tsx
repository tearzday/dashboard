import { Provider } from "react-redux"
import { store } from "../model/store"
import type { ReactNode } from "react"

export const StoreProvider = ({children}: {children: ReactNode}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}