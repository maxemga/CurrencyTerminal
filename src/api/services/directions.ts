import { ApiMethods } from "src/enums";
import { BaseService } from "./base";

export class DirectionsService extends BaseService {
  public static async getAll() {
    return await this.fetch<any>({
      url: ApiMethods.DIRECTIONS,
      method: "GET",
    });
  }

  public static async getFilters() {
    return await this.fetch<any>({
      url: ApiMethods.FILTERS,
      method: "GET",
    });
  }
}
