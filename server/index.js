// index.js
import app from './src/app.js';
import { PORT_URI } from './src/config/constants.js';
import connectDB from './src/config/db.js'; // Import the connectDB function

// Port on which the server listens
const PORT = PORT_URI
//console.log(PORT_URL)

// Connect to MongoDB
connectDB().then(()=>{
    // Start the server
    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
      });
});
