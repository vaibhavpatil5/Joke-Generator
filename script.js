



	const jokes = document.querySelector('#joke');
	const jokeBtn = document.querySelector('#jokeBtn');


	//using PROMISE
	// const generateJokes = ()=>{

	// 	const setHeader ={
	// 		headers: {
	// 			Accept:"application/json"	//here we set the object
	// 		}
	// 	}

	// 	fetch ('https://icanhazdadjoke.com', setHeader)
	// 	.then((res)=>res.json())		//here we use json to convert html api content into json format 
		
	// 	.then((data)=>{
	// 		jokes.innerHTML=data.joke;	//here if i get the data i will simply disply on the DOM
	// 	})
	// 	.catch((error)=>{
	// 		console.log(error);		//here if i get any error data (e.g internet,server error ) i will simply catch
	// 	})
	// }

 

	//using ASYNC-AWAIT
	const generateJokes = async ()=>{

		try{

			const setHeader ={
				headers: {
					Accept:"application/json"	//here we set the object
				}
			}

			const res = await fetch ('https://icanhazdadjoke.com', setHeader);
			const data = await res.json();
			jokes.innerHTML=data.joke;

		}

		catch(error){
			console.log(error);
		}
	}

	
	jokeBtn.addEventListener('click', generateJokes);
	generateJokes();