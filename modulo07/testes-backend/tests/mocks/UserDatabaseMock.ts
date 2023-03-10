import { UserRepository } from "../../src/business/UserRepository";
import { User } from "../../src/model/User";
import {userMock} from "../mocks/UserMock"

export class UserDatabaseMock implements UserRepository {

    public async getUserById ( id: string ): Promise<User | undefined> {
        return id === "03" ? userMock : undefined
    }
}
