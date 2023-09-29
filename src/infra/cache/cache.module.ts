import { Module } from '@nestjs/common'
import { EnvModule } from '../env/env.module'
import { CacheRepository } from './cache-repository'
import { RedisCacheRepository } from './redis/redis-cache-repository'
import { RedisService } from './redis/redis.service'

@Module({
  imports: [EnvModule],
  providers: [
    RedisService,
    {
      provide: CacheRepository,
      useClass: RedisCacheRepository,
    },
  ],
  exports: [CacheRepository],
})
export class CacheModule {}
