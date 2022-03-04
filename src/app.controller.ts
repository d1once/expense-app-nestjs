import { Controller, Get } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReport() {
    return [];
  }

  @Get(':id')
  getIncomeReportById() {
    return {};
  }
}
