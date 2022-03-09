import {Injectable} from "@nestjs/common"
import {ReportType, data} from "./data"

@Injectable()
export class AppService  {
  getAllReport(type: ReportType) {
    return data.report.filter((report) => report.type === type);

  }
}