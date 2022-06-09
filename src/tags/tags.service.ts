import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  readonly tags: Tag[];

  constructor(
    @InjectRepository(Tag)
    private tagsRepository: Repository<Tag>,
  ) {}

  create(createTagDto: CreateTagDto) {
    return 'This action adds a new tag';
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagsRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    return await this.tagsRepository.findOneBy({ id });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  async remove(id: number): Promise<void> {
    await this.tagsRepository.delete(id);
  }
}

// const tags: Tag[] = [
//   {
//     id: 1,
//     title: 'Partners',
//     subtitle: 'Prince of Songkhla University/Einhorn',
//   },
//   { id: 2, title: 'Wildlife protected', subtitle: 'updating' },
//   {
//     id: 3,
//     title: 'Challenges',
//     subtitle: 'global demand for rubber at competetitive prices',
//   },
//   {
//     id: 4,
//     title: 'Wildlife protected',
//     subtitle:
//       'Coopers Mountain Squirrel, Bannerman’s Turaco, Bamenda Pririt, Cross River gorillas, Nigeria-Cameroon chimpanzees',
//   },
//   {
//     id: 5,
//     title: 'Main threats',
//     subtitle:
//       'Poaching, deforestation, bush fires, poor farming practices, urbanization',
//   },
// ];
