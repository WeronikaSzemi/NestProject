import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable} from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class MyCacheInterceptor implements  NestInterceptor {
	async intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Promise<Observable<any>> {
		return next.handle().pipe(
			tap(data => {
				console.log(data);
			})
		);
	}
}
