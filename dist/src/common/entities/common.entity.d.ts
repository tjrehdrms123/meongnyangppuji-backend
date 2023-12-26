export declare abstract class CommonEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    toJSON(): Record<string, any>;
}
