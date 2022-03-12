import { useEffect, useState } from "react";


/* 
    1. useEffect(callback)
        - Gọi callback mỗi khi component re-render
        - Gọi callback sau khi component thêm element vào DOM
    2. useEffect(callback, [])
        - Chỉ gọi callback 1 lần sau khi component mounted
    3. useEffect(callback, [deps])
        - Callback sẽ được gọi lại mỗi khi deps tha đổi

    All: Callback luôn được gọi sau khi component mounted
    All: Cleanup function luôn được gọi trước khi component unmounted
    All: Cleanup function luôn được gọi trước khi callback được gọi(trừ lần mounted)
 */

/*
    useEffect
        1. Cập nhật lại state
        2. Cập nhật DOM (mutaed)
        3. Render lại UI
        4. Gọi cleanup nếu deps thay đổi
        5. Gọi useEffect Callback

    useLayoutEffect
        1. Cập nhật lại state
        2. Cập nhật DOM (mutaed)
        3. Gọi cleanup nếu deps thay đổi (sync)
        4. Gọi useLayoutEffect Callback (sync)
        5. Render lại UI
 */

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']


function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGotoTop, setShowGotoTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [type])

    useEffect(() => {

        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    useEffect(() => {

        function handleScroll() {
            setShowGotoTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <h3>{width}</h3>

            {tabs.map((tab, i) =>
                <button
                    key={i}
                    style={type === tab ? { color: '#fff', backgroundColor: '#1e3a8a' } : {}}
                    onClick={() => setType(tab)}>{tab}
                </button>)}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => <li key={post.id}>{post.title || post.name}</li>)}
            </ul>
            {showGotoTop && <button style={{ position: 'fixed', right: 20, bottom: 20 }}>OnTop</button>}
        </div>)
}

export default Content