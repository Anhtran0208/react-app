import React from "react";
import { useState } from "react";
const NewGoal = props => {

    const [userInput, setUserInput] = useState('')
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: userInput
        }
        setUserInput('')

        props.onAddGoal(newGoal);
    }

    const textChangeHandler = event => {
        setUserInput(event.target.value)
    }

    return <form onSubmit={addGoalHandler}>
        <input type="text" value={userInput} onChange={textChangeHandler}/>
        <button type="submit">Add goal</button>
    </form>
}
export default NewGoal