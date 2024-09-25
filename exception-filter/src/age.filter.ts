import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class AgeFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse();
    const statusCode = exception.getStatus();
    return response.status(statusCode).json(
      {
        code: statusCode,
       message: exception.message,
       error: 'Bad Request',
       xxx: 111
      }
    )
  }
}
