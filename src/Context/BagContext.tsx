import { createContext, ReactNode, useState } from 'react'


type BagContextData = {
    hasFineshed: boolean;
    bagFineshed: () => void;
    closeModal: () => void;
}
type BagContextProviderProps = {
    children: ReactNode;
}

export const BagContext = createContext({} as BagContextData)

export function BagContextProvider({ children }: BagContextProviderProps) {
    const [hasFineshed, setHasFinished] = useState(false)

    function bagFineshed() {
        setHasFinished(true)
    }
    function closeModal() {
        setHasFinished(false)
    }
    return (
        <BagContext.Provider
            value={{
                hasFineshed,
                bagFineshed,
                closeModal,
            }}>

            {children}
        </BagContext.Provider>
    )
}