import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CatDto } from 'src/application/cats/dtos/responses/cat.dto';
import { CatService } from 'src/application/cats/services/cat.service';
import { Response } from 'express';
import { CatCreateDto } from 'src/application/cats/dtos/requests/cat-create.dto';
import { CatUpdateDto } from 'src/application/cats/dtos/requests/cat-update.dto';

@Controller('cats')
export class CatsController {

    constructor(private readonly catService: CatService) {}

    @Get()
    async findAll(@Res() res: Response) {
        let cats =  await this.catService.findAll()
        res.status(HttpStatus.OK)
            .json(cats);
    }

    @Get(":id")
    async findById(@Res() res: Response, @Param('id') id: number) {
        let cats =  await this.catService.findById(id);
        res.status(HttpStatus.OK)
            .json(cats);
    }

    @Post()
    async create(@Res() res: Response, @Body() dto: CatCreateDto) {
        let cats =  await this.catService.create(dto);
        res.status(HttpStatus.CREATED)
            .json(cats);
    }

    @Put(":id")
    async update(@Res() res: Response, @Body() dto: CatUpdateDto, @Param('id') id: number) {
        await this.catService.update(id, dto);
        res.status(HttpStatus.NO_CONTENT);
    }

    @Delete(":id")
    async delete(@Res() res: Response, @Param('id') id: number) {
        await this.catService.delete(id);
        res.status(HttpStatus.NO_CONTENT);
    }
}
