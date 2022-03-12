import { useMemo, useRef, useState } from "react"

function UseMemo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()

    function handleSubmit() {
        setProducts([...products, { name, price: +price }])
        setName('')
        setPrice('')
        nameRef.current.focus()

    }

    const total = useMemo(() => {
        const result = products.reduce((prev, curr) => prev + curr.price, 0)
        return result
    }, [products])

    return (
        <div style={{ padding: '10px 32px' }}>
            <input ref={nameRef} value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            <input value={price} placeholder="Enter email" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
            <h2 style={{ marginTop: '10px' }}>Total:  {total}</h2>
            <ul>
                {products.map((product, index) => <li key={index}>{product.name}</li>)}
            </ul>
        </div>
    )
}

export default UseMemo