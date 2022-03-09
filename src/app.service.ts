import {ReportType, data} from "./data"


export class AppService  {
  getAllReport(type: ReportType) {
    return data.report.filter((report) => report.type === type);

  }
}