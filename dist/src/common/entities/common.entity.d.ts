export declare abstract class CommonEntity {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
    toJSON(): Record<string, any>;
}
