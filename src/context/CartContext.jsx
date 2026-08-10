import React, {createContext, useContext, useState} from "react";

const CartContext = createContext()



export default function CartProvider({children}){
    const [keranjang, setKeranjang] = useState([]);


    const tambahKeranjang = (ProdukBaru) =>{

        setKeranjang((prev) =>{
            const existing = prev.find((barang) => barang.id === ProdukBaru.id)

            if (existing){
                return prev.map((barang) => barang.id === ProdukBaru.id ? {...barang, quantity: barang.quantity + 1}: barang)
            }

            return [...prev, {...ProdukBaru, quantity : 1}]
        })
    
    
    }

    const kurangiKeranjang = (IdBarang) => {
        setKeranjang((prev) => {
            const existing = prev.find((barang) => barang.id === IdBarang)

            if (existing && existing.quantity > 1){
                return prev.map((barang) => barang.id === IdBarang ? {...barang, quantity : existing.quantity - 1}: barang)
            }
            return prev.filter((barang) => barang.id !== IdBarang);

        })
    }

    const totalBarang = keranjang.reduce((sum, barang) => sum + barang.quantity, 0);

    const totalHarga = keranjang.reduce((sum, barang) => sum + (barang.harga|| barang.price || 0)* barang.quantity, 0)


    return(
        <CartContext.Provider
        value={{
            keranjang, 
            tambahKeranjang, 
            kurangiKeranjang, 
            totalBarang, 
            totalHarga}}
        >
            {children}

        </CartContext.Provider>
    )


    
}

export function useCartContext(){
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCartContext harus digunakan di dalam CartPRovider")
    }

    return context
}