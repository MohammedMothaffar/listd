import {PrismaClient} from '@prisma/client'
import type { PageServerLoad } from './$types';

const client = new PrismaClient()
const users = await client.user.findMany()
export const load = (async () => {
    return {
        users ,
    };
}) satisfies PageServerLoad;