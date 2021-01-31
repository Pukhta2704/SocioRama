require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

require('./db/connection');

const app = express();

// app.use(cors()); only for development
app.use(express.json({ limit: '7mb' }));

app.use(require('./api/auth/auth_routes'));
app.use(require('./api/post/post_routes'));
app.use(require('./api/user/user_routes'));

const PORT = process.env.PORT || 5000;
app.use(express.static('client/build'));

if (process.env.NODE_ENV == 'production') {

	app.get('*', (req, res) => {
		try {
			console.log('here');
			res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
		} catch (error) {
			res.json({ error: error });
		}
	});
}

app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));
