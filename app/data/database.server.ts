import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
	prisma.$connect()
} else {
	let globalWithPrisma = global as typeof globalThis & {
		prisma: PrismaClient
	}
	if (!globalWithPrisma.prisma) {
		globalWithPrisma.prisma = new PrismaClient()
		globalWithPrisma.prisma.$connect()
	}
	prisma = globalWithPrisma.prisma
}

export { prisma }
