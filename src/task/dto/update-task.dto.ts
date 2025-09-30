import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTaskDto, TaskStatus } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Estudar NestJS - Atualizado',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'Descrição detalhada da tarefa',
    example:
      'Aprender sobre controllers, services, documentação com Swagger e validação',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Status da tarefa',
    enum: TaskStatus,
    example: TaskStatus.IN_PROGRESS,
    required: false,
  })
  status?: TaskStatus;
}
