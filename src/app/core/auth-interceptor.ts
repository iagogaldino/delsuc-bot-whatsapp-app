import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Obtém o token de autenticação do localStorage
    const authToken = localStorage.getItem('token');

    // Clona a requisição original e adiciona o cabeçalho de autorização, se o token estiver presente
    const authReq = authToken
      ? req.clone({
        setHeaders: {
          Authorization: `${authToken}`,
        },
      })
      : req;

    // Encaminha a requisição modificada para o próximo manipulador na cadeia
    return next.handle(authReq);
  }
}
