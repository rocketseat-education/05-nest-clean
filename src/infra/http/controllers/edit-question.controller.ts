import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'

const editQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(editQuestionBodySchema)

type EditQuestionBodySchema = z.infer<typeof editQuestionBodySchema>

@Controller('/questions/:id')
export class EditQuestionController {
  constructor(private editQuestion: EditQuestionUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe) body: EditQuestionBodySchema,
    @CurrentUser() user: UserPayload,
    @Param('id') questionId: string,
  ) {
    const { title, content } = body
    const userId = user.sub

    const result = await this.editQuestion.execute({
      title,
      content,
      authorId: userId,
      attachmentsIds: [],
      questionId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
