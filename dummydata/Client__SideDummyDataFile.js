// import axios from 'axios';
// import faker, { fake } from 'faker';

// const main = async (files) => {


//     for(let i=0;i<19;i++){
        
//         const reader=new FileReader()
//         reader.readAsDataURL(files[i])
//         reader.onloadend=async()=>{
//             await axios.post('/dummyprofilephoto',{count:i,image:reader.result})
            
//             console.log("updated")
//         }
//     }

// // 	console.log(files);
// // 	let users = [{ name: 'imu', username: 'imu123', password: '123', token: '', followers: [] }];
// // 	for (let i = 0; i < 19; i++) {
// // 		const newUser = {
// // 			name: faker.name.findName(),
// // 			username: faker.name.lastName(),
// // 			password: '123',
// // 			token: '',
// // 			followers: [],
// // 			profilePhoto: faker.image.people(),
// // 		};

// // 		users.push(newUser);
// // 	}
// // 	console.log(users);
// // 	for (let i = 0; i < 19; i++) {
// // 		const res = await axios
// // 			.post('/signup', {
// // 				name: users[i].name,
// // 				username: users[i].username,
// // 				password: '123',
// // 			})
// // 			.catch((err) => {
// // 				users[i] = null;
// // 				const newUser = {
// // 					name: faker.name.findName(),
// // 					username: faker.name.lastName(),
// // 					password: '123',
// // 					token: '',
// // 					followers: [],
// // 					profilePhoto: faker.image.people(),
// // 				};

// // 				users[i] = newUser;
// // 				i--;
// // 			});
// // 		users[i]._id = res.data._id;
// // 		users[i].token = res.data.token;
// // 	}
// // 	for (let i = 0; i < 19; i++) {
// // 		for (let j = i + 1; j < 19; j++) {
// // 			const res = await axios.put(
// // 				'/follow',
// // 				{ followid: users[j]._id },
// // 				{ headers: { 'x-auth-token': users[i].token } }
// // 			);
// // 			users[j].followers.push(users[i]);
// // 		}
// // 	}
// // 	for (let i = 18; i >= 9; i--) {
// // 		for (let j = 8; j >= 0; j--) {
// // 			const res = await axios.put(
// // 				'/follow',
// // 				{ followid: users[j]._id },
// // 				{ headers: { 'x-auth-token': users[i].token } }
// // 			);
// // 			users[j].followers.push(users[i]);
// // 		}
// // 	}

// // 	let k = -1;
// // 	for (let i = 0; i < 10; i++) {
// // 		users.forEach(async (user) => {
// // 			k++;
// // 			const reader = new FileReader();
// // 			reader.readAsDataURL(files[k]);
// // 			reader.onloadend = async () => {
// // 				const res = await axios.post(
// // 					'/createpost',
// // 					{ image: reader.result },

// // 					{ headers: { 'x-auth-token': user.token } }
// // 				);
// // 				console.log('post created by user ' + user.name);
				
// // 			};
// // 		});
// // 	}
// };

// export default main;
