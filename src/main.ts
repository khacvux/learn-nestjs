import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import Eureka from 'eureka-js-client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9999);

  // const client = new Eureka({
  //   instance: {
  //     app: 'nest-service',
  //     hostName: 'localhost',
  //     ipAddr: '127.0.0.1',
  //     statusPageUrl: 'http://localhost:8761/eureka',
  //     port: {
  //       $: 9999,
  //       '@enabled': 'true',
  //     },
  //     dataCenterInfo: {
  //       '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
  //       name: 'MyOwn',
  //     },
  //   },
  //   eureka: {
  //     host: '127.0.0.1',
  //     port: 8761,
  //     servicePath: '/eureka/apps/',
  //   },
  // });

  // client.start((error) => {
  //   console.log(error || 'complete');
  // });
}
bootstrap();
