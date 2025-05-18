import { PORT } from "../config/config.js";
import { app } from "../index.js";


export const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};