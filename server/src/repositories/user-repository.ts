import { UserEntity } from "../entities/user-entity";
import { BaseRepository } from "./base-repository";

export class UserRepository extends BaseRepository<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async findByName(name: string) {
    return this.find({ where: { name } });
  }
}
