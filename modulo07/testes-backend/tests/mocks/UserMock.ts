import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "03",
    "Predo",
    "predo@email.com",
    "predo123456",
    USER_ROLES.ADMIN
)
