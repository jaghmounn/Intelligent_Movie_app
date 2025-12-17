import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';import { provideZard } from '@/shared/core/provider/providezard';


export const appConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor,
    provideZard(),]))
  ]
};
