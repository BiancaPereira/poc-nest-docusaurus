import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription(
      'API para gerenciamento de tarefas com operações CRUD completas',
    )
    .setVersion('1.0')
    .addTag('tasks', 'Operações relacionadas a tarefas')
    .setContact('Bianca Correia', '', 'bianca.correia@example.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addServer('http://localhost:3000', 'Servidor de desenvolvimento')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    customSiteTitle: 'Tasks API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
    },
  });

  await app.listen(3000);
  console.log('Tasks API running on http://localhost:3000');
  console.log('Swagger documentation available at http://localhost:3000/api');
}

bootstrap().catch((error) => {
  console.error('Error during bootstrap:', error);
});
