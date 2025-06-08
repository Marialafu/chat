// import { useEffect, useState } from 'react';
// import { GlobalStyles } from './styles/GlobalStyles';
// import Form from './components/form/Form';
// import { io } from 'socket.io-client';

// const socket = io();

// const App = () => {
// 	const [isConnected, setIsConnected] = useState(false);
// 	const [message, setMessage] = useState([]);

// 	useEffect(() => {
// 		socket.connect();

// 		socket.on('connect', () => setIsConnected(true));
// 		socket.on('disconnect', () => setIsConnected(false));

// 		socket.on('messageEmited', data => {
// 			setMessage([...message, data]);
// 		});

// 		return () => {
// 			socket.disconnect();
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<GlobalStyles />
// 			<h1>CHAT:</h1>
// 			<ul>mensajes; {message}</ul>
// 			<Form message={message} setMessage={setMessage} />
// 		</>
// 	);
// };

// const exportData = async setData => {
// 	const response = await fetch('http://localhost:3000/');
// 	const data = await response.json();
// 	console.log(data);

// 	//setData(data);
// };

// export default App;
