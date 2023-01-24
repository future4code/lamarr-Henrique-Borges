import { BaseDatabase } from "./BaseDatabase";
import { Movie } from "../models/Movie";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    async create({ id, title, description, durationInMinutes, yearOfRelease }: Movie): Promise<void> {
  
        await MovieDatabase.connection.raw(`
            INSERT INTO ${MovieDatabase.TABLE_NAME} (id, title, description, duration_in_minutes, year_of_release)
            VALUES(
                "${id}", 
                "${title}", 
                "${description}", 
                ${durationInMinutes},
                ${yearOfRelease} 
            );
        `)
    }

    getAllMovies = async (): Promise<Movie[]> => {
        let errorCode = 400

        try {
            const result = await MovieDatabase.connection.raw(`
                SELECT * FROM LABEFLIX_MOVIE;
            `)

            const allMovies = result[0]

            if (allMovies.length <1) {
                errorCode = 500
                throw new Error("Erro inesperado no servidor. Requisição indisponível no momento!")
            }

            return allMovies

        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}
