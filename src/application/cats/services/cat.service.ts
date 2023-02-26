import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundException } from 'src/application/shared/exceptions/entity-not-found.exception';
import { Cat } from 'src/domain/cats/cat.entity';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CatCreateDto } from '../dtos/requests/cat-create.dto';
import { CatUpdateDto } from '../dtos/requests/cat-update.dto';

@Injectable()
export class CatService {

    constructor(@InjectRepository(Cat) private repository: Repository<Cat>) {}

    async findAll(): Promise<Cat[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Cat> {
        try {
            return await this.repository.findOneByOrFail({id: id});
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                throw new EntityNotFoundException('Cats', {id});
            }
            console.error("Cannot find the 'Cat' resource with Id = " + id);
            throw error;
        }
    }

    async create(dto: CatCreateDto): Promise<Cat> {
        try {
            return await this.repository.save(dto);
        } catch (error) {
            console.error("Cannot create the 'Cat' resource with data:" + JSON.stringify(error));
            throw error;
        }
    }

    async update(id: number, dto: CatUpdateDto): Promise<Cat> {
        try {
            let cat = await this.findById(id)
            cat.name = dto.name;
            return await this.repository.save(cat);
        } catch (error) {
            console.error("Cannot create the 'Cat' resource with data:" + JSON.stringify(error));
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        try {
            let cat = await this.findById(id)
            await this.repository.delete({id: id});
        } catch (error) {
            console.error("Cannot create the 'Cat' resource with data:" + JSON.stringify(error));
            throw error;
        }
    }
}
