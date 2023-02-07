import { UserDatabase} from './../data/UserDatabase';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";
import { TokenGenerator } from '../services/TokenGenerator';

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password, role } = req.body;
       
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
            role
          };
          
          const userBusiness = new UserBusiness()
          const token = await userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };   
      
      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public editUser = async (req: Request, res: Response) => {
        try {

          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          console.log(input)
          await userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public getUserById = async(req:Request,res:Response)=>{
        try {
          const token = req.headers.authorization as string;
          console.log(token);
      
          const tokenGenerator = new TokenGenerator()
          const authenticationData = tokenGenerator.tokenData(token);
          console.log(authenticationData);
          
          const userBusiness = new UserBusiness()
          const user = await userBusiness.getUserById(authenticationData);
      
          res.status(200).send({message:"Usuário autorizado!", id: user.id, email: user.email});

        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }

      }

    

      
 



}
