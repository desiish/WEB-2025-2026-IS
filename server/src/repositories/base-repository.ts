import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../app-data-source";

export abstract class BaseRepository<
  T extends ObjectLiteral,
> extends Repository<T> {
  constructor(entity: EntityTarget<T>) {
    super(entity, AppDataSource.manager);
  }
}
