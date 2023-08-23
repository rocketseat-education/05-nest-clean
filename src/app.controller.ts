import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  index(): string {
    return this.appService.getHello()
  }

  @Post('/hello')
  store(): string {
    return 'teste'
  }
}
