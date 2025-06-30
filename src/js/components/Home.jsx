import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [newTask, setnewTask] = useState('');
	const [tasks, setTasks] = useState([]);
	const [Hover, setHover] = useState(null); //variable para el evento onmouseover


	function addTask(event) {
		if (event.key === "Enter" && newTask.trim() !== '') {
			setTasks([...tasks, newTask]);
			console.log(tasks);
			setnewTask('');

		}
	}
	function deleteTask(index) {
		setTasks(tasks.filter((task, i) => i !== index));

	}


	//function CreateUser(params) {

	//https://playground.4geeks.com/todo/users/DanielaEula


	//}

	return (
		<div className="container" 
				    style={{
						backgroundColor:'#e6ccef',
						padding:'50px',
						fontFamily:''
						}}>
			<div className="text-center">
				<h3 className="card-header text-center text-dark mb-3 ">ToDo List</h3>
				<div className="card"
					style={{
						backgroundColor:'#f7f7f7',
						border:'2px solid #ddd',
						marginBottom:'10px',
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
						}}>

					<input type="text" placeholder="What needs to be done?" value={newTask}
						onChange={(event) => setnewTask(event.target.value)}
						onKeyDown={addTask}
						style={{border:'none', textAlign:'center'}}>
					</input>

					<ul className="list-group list-group-flush">
						{tasks.map((task, index) => (
							<li className="list-group-item d-flex" key={index} style={{ listStyleType: 'none' }} onMouseOver={() => setHover(index)} onMouseOut={() => setHover(null)} >
							<span style={{ flexGrow: 1}}>{task}</span>
								{Hover === index && (
									<button className="btn-close ms-auto " onClick={() => deleteTask(index)}></button>
								)}
								
							</li>
						))}
					</ul>

					<div className="card-footer d-flex justify-content-start"><span style={{fontSize: '12px'}}>{tasks.length} Items left</span></div>
				</div>
			</div>
		</div>
	);
};

export default Home;


