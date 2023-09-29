import { Module } from '@nestjs/common'
import { EnvModule } from '../env/env.module'
import { EnvService } from '../env/env.service'

@Module({
  imports: [EnvModule],
  providers: [EnvService],
})
export class CacheModule {}
