import { NotFoundException } from "@nestjs/common";

export class EntityNotFoundException extends NotFoundException {
    entityName: string;
    key: any;

    constructor(entityName: string, key: any) {
        super({
            message: `Entity '${entityName}' not found by current identifier`,
            entityName: entityName,
            identifier: key
        });

        this.entityName = entityName;
        this.key = key;
    }
}