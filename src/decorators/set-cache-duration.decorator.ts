import { SetMetadata } from "@nestjs/common";

export const SetCacheDuration = (cacheDuration: number) => SetMetadata('cacheDuration', cacheDuration);