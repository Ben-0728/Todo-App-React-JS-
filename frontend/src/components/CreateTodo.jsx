import {useState} from "react";

export function CreateTodo(){
    const {title, setTitle} = useState("");
    const {description, setDescription} = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input> <br />
        <input type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}></input> <br />

        <button onClick={function(){
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
        }}>Add Todo</button>
        </div>
}