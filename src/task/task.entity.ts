import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from './dto/create-task.dto';

export class Task {
  @ApiProperty({
    description: 'ID único da tarefa',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Estudar NestJS',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição detalhada da tarefa',
    example: 'Aprender sobre controllers, services e documentação com Swagger',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Status atual da tarefa',
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @ApiProperty({
    description: 'Data de criação da tarefa',
    example: '2024-01-15T10:30:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data da última atualização',
    example: '2024-01-15T14:20:00Z',
  })
  updatedAt: Date;

  constructor(partial: Partial<Task>) {
    Object.assign(this, partial);
  }
}
