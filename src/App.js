import React from "react";
import { useState } from "react";
import './App.css'
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the main topics'},
    {id: 'cg3', text: 'Help other students'}
  ]);

  const addNewGoalHandler = newgoal => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newgoal)
    })
  }

  return <div>
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals} />
  </div>
}
export default App