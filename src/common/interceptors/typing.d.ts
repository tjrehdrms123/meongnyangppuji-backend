import { UsersDto } from "src/users/dto/user.dto"

declare global {
  namespace Express {
    interface User extends UsersDto {}

    interface Request {
      token?: string
      user?: any
    }
  }
}
