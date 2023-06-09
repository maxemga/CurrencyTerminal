import { ApiMethods } from "src/enums";
import { Direction, Filter } from "src/types";
import { BaseService } from "./base";

export class DirectionsService extends BaseService {
  public static async getAll() {
    return await this.fetch<Direction[]>({
      url: ApiMethods.DIRECTIONS,
      method: "GET",
    });
  }

  public static async getFilter() {
    return await this.fetch<Filter[]>({
      url: ApiMethods.FILTER,
      method: "GET",
    });
  }
}
