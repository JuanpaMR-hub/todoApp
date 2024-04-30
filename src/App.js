import "./styles/App.css";

import TaskView from "./components/TaskView";
import TaskForm from "./components/TaskForm";
import DarkTheme from "./components/DarkTheme";



function App() {

    return (
        <div className="container" data-theme="light">
            <div className="header">
                <DarkTheme/>
            </div>
            <TaskForm/>
            <TaskView/>
            
            
        </div>
    );
}

export default App;
