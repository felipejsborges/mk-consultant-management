import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express'; // express and it types to use in error settings
// import cors from 'cors';
import 'express-async-errors'; // to handle with errors
import { errors } from 'celebrate'; // errors for data validation using celebrate lib

// import uploadConfig from '@config/upload';
import AppError from './errors/AppError'; // import Error config for this application

// import rateLimiter from './middlewares/rateLimiter';
import routes from './routes';

import './database/typeorm';
import './container';

const app = express(); // instacing express()

// app.use(rateLimiter);
// app.use(cors());
app.use(express.json()); // now we can use json in our application
// app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes); // saying to our app use the imported routes file
app.use(errors()); // now our application can use errors from celebrate

// errors settings:
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
	// if error is AppError type, return a reponse with the status and the message used when create a new AppError('message', status). Status is optional. By default is 400.
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({
			status: 'error',
			message: err.message,
		});
	}

	// if error is not AppError type, it means is a trouble that we are not handling in our code. So, it should be descript in console. Then we can try to figure out what happend. This type of error is status 500, internal server error.
	console.error(err);

	return response.status(500).json({
		status: 'error',
		message: 'Internal server error',
	});
});

// set a port to our server and show a message when it starts with no trouble
app.listen(3333, () => {
	console.log('Server started on port 3333 📡');
});
