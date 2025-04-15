import express, { Express } from "express";
import cors from 'cors';
import router from "./routes/routes";

class App{
    private server: Express;
    private port: string | number;

    constructor(){
        this.server = express();
        this.port = process.env.PORT || 3001;

        this.middlewares();
        this.routers();
    }

    private middlewares(): void {
        this.server.use(express.json());
        this.server.use(cors());
    }

    private routers():void {
        this.server.use('/api', router);
    }

    public start():void {
        this.server.listen(this.port,()=>{
            console.log(`Servidor rodando na porta http://localhost:${this.port}/api`);
        })
    }
}

export default App;