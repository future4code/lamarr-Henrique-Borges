import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../models/MovieDTO";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, durationInMinutes, yearOfRelease } = req.body;
      const input: MovieInputDTO = {
        title: req.body.title,
        description: req.body.description,
        durationInMinutes: req.body.durationInMinutes,
        yearOfRelease: req.body.yearOfRelease
      }

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }


    getAllMovies = async (req:Request, res:Response): Promise<void> => {
        let errorCode = 400

        try {
            const movieBusiness = new MovieBusiness()
            const movies = await movieBusiness.getAllMovies()
            res.status(200).send(movies)

        } catch (err: any) {
            res.status(errorCode).send(err.message);
        }
    }
}
