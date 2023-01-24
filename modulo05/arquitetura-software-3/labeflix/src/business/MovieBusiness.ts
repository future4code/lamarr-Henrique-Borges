import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { Movie } from "../models/Movie";
import { MovieInputDTO } from "../models/MovieDTO";
import { InvalidDatas } from "../error/MovieErrors";

export class MovieBusiness {
  async create({ title, description, durationInMinutes, yearOfRelease }: MovieInputDTO):Promise<void> {
    if (!title || !description || !durationInMinutes || !yearOfRelease ) {
      throw new InvalidDatas()
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title, 
      description, 
      durationInMinutes, 
      yearOfRelease 
    })
  }

    getAllMovies = async (): Promise<Movie[]> => {
        try {
            const movieDatabase = new MovieDatabase()
            return await movieDatabase.getAllMovies()
        } catch (err:any) {
            throw new Error(err.message)
        }
    }
}
