import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/_shared/entities';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  readonly tags: Tag[];

  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  create(_createTagDto: CreateTagDto) {
    return 'This action adds a new tag';
  }

  async findAll(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    return this.tagsRepository.findOneBy({ id });
  }

  update(id: number, _updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  async remove(id: number): Promise<void> {
    await this.tagsRepository.delete(id);
  }
}
