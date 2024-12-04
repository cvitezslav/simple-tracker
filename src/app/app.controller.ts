import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get('/')
  @Redirect('/api', 301)
  @ApiExcludeEndpoint()
  async redirectToSwagger(): Promise<void> {}
}
