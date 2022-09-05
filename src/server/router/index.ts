// src/server/router/index.ts
import superjson from 'superjson';
import { createRouter } from './context';
import { paymentRouter } from './payment';

import { protectedExampleRouter } from './protected-example-router';
import { userRouter } from './user';

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('user.', userRouter)
    .merge('payment.', paymentRouter)
    .merge('question.', protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
