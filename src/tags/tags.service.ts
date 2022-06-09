import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  readonly tags: Tag[];

  constructor() {
    this.tags = tags;
  }

  create(createTagDto: CreateTagDto) {
    return 'This action adds a new tag';
  }

  findAll(): Tag[] {
    return this.tags;
  }

  findOne(id: number): Tag {
    return this.tags.find((tag) => tag.id === id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}

const tags: Tag[] = [
  {
    id: 1,
    title: 'Partners',
    subtitle: 'Prince of Songkhla University/Einhorn',
  },
  { id: 2, title: 'Wildlife protected', subtitle: 'updating' },
  {
    id: 3,
    title: 'Challenges',
    subtitle: 'global demand for rubber at competetitive prices',
  },
  {
    id: 4,
    title: 'Wildlife protected',
    subtitle:
      'Coopers Mountain Squirrel, Bannerman’s Turaco, Bamenda Pririt, Cross River gorillas, Nigeria-Cameroon chimpanzees',
  },
  {
    id: 5,
    title: 'Main threats',
    subtitle:
      'Poaching, deforestation, bush fires, poor farming practices, urbanization',
  },
];
