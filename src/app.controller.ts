import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import {data, ReportType} from "./data";

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReport(@Param("type") type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
   return  data.report.filter((report) => report.type === reportType )
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Created!';
  }

  @Put(':id')
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return "Deleted :("
  }
}
