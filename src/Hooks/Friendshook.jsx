import { useState, useMemo } from "react";

const initialFriends = [
    kola,
    mola
    gesa,
    fde,
    vfdfsdf,
    fdsf
    fdsfdsf,
    gtrg,
    fyhy,
    fwsdf,
    fdsf,
    
]
export default function Friends() {
    const [count, setCount] = useState(0);
    // count не впливає на filter, але при зміні (по button) - виклакається функція Friends (ререндер) 
    //  і виконується friends.filter . тобто не тільки при зміні filter
    const [friends] = useState(initialFriends);
    const [filter, setFilter] = useState("");

//     const visibleFriends = friends.filter(friend =>
//         friend.toLowerCase().includes(filter))
// }; 

// з useMemo (вказує при яких стейтах викликати цю функцію):
const visibleFriends = useMemo(() => {
    return friends.filter(friend => friend.toLowerCase().includes(filter))
}, [filter, friend])

return (
    <div>
        <button onClick={() => setCount(s => s + 1)}>{count}</button>
        <hr />
        <input onChange={() => setFilter(e.target.value)} value={filter} />
        <ul>
            {visibleFriends.map((friend, index) => (
                <li key={index}> {friend }</li>
            ))}
        </ul>
    </div>
)