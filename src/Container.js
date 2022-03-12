import { useRef, useState } from "react"
import { useStore, action } from "./store"
import { delateAllTodo } from "./store/action"

function Container() {

    const [state, dispatch] = useStore()
    const [editing, setEditing] = useState({ index: 0, isEdit: false, })
    const { todos, inputTodo } = state
    const { setTodoInput, addTodo, deleteTodo, editTodo } = action
    const inputRef = useRef()

    function handleAdd() {
        if (!inputTodo.trim()) return
        setEditing({ index: 0, isEdit: false })
        dispatch(addTodo(inputTodo))
        dispatch(setTodoInput(''))
        inputRef.current.focus()

    }

    function handleUpdate(index) {
        dispatch(editTodo(inputTodo, index))
        setEditing({ ...editing, isEdit: false })
        dispatch(setTodoInput(''))

    }

    function handleEdit(todo, index) {
        setEditing({ index, isEdit: true })
        dispatch(setTodoInput(todo))
        inputRef.current.focus()
    }

    function handleDelete(index) {
        if (editing.isEdit) return
        dispatch(deleteTodo(index))
    }

    const handleClearAll = () => {
        if (editing.isEdit) return
        dispatch(delateAllTodo())
        dispatch(setTodoInput(''))

    }

    function handleKeydown(e) {
        if (e.code !== 'Enter') return
        editing.isEdit = true ? handleUpdate(editing.index) : handleAdd()
    }

    return (
        <div style={{ marginTop: "40px", padding: "40px" }}>
            <h2>Todo</h2>
            <input ref={inputRef}
                value={inputTodo}
                onChange={(e) => dispatch(setTodoInput(e.target.value))}
                onKeyDown={handleKeydown} />
            {!editing.isEdit && <button onClick={handleAdd}>Add</button>}
            {editing.isEdit && <button onClick={() => handleUpdate(editing.index)}>Update</button>}
            <ul>
                {todos.map((todo, index) =>
                    <li key={index}>{todo}
                        <span
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => handleDelete(index)}> &times;
                        </span>

                        <span
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => handleEdit(todo, index)}> &crarr;
                        </span>
                    </li>
                )}
            </ul>
            {todos.length >= 1 && <button onClick={handleClearAll}>Clear all</button>}
        </div>
    )
}

export default Container