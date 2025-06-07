const Form = (message, setMessage) => {
	return (
		<form>
			<input type='text' autoComplete='off' />
			<button type='submit' onSubmit={event => sendMessage(event, setMessage)}>
				Send
			</button>
		</form>
	);
};

const sendMessage = (event, setMessage) => {
	event.preventDefault();
	console.log(event.target);

	//socket.emit('message', event.target);
};

export default Form;
