import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

export function setupSwagger(server: NestExpressApplication) {
  const options = new DocumentBuilder()
    .setTitle('멍냥뿌지 - API')
    .setDescription('BackEnd API DOCS')
    .setVersion('0.0.1')
    .addServer(process.env.DOMAIN_PRODUCTION, 'Production Server')
    .addServer(process.env.DOMAIN_LOCAL, 'Local Server')
    .build();

  const document = SwaggerModule.createDocument(server, options);

  SwaggerModule.setup('docs', server, document, {
    swaggerOptions: {
      servers: [
        { url: process.env.DOMAIN_PRODUCTION, description: 'Production Server' },
        { url: process.env.DOMAIN_LOCAL, description: 'Local Server' },
      ],
    },
  });
}
