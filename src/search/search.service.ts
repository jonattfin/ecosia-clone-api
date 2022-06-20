import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';

@Injectable()
export class SearchService {
  create(createSearchDto: CreateSearchDto) {
    return 'This action adds a new search';
  }

  findAll() {
    return ['a', 'b', 'c', 'd'];
  }

  findOne(id: string) {
    return ['a', 'b', 'c', 'd'].map(item => ({
      url: 'www.site.com',
      snippet: item + ' bla bla bla',
      name: item
    }));
  }

  update(id: number, updateSearchDto: UpdateSearchDto) {
    return `This action updates a #${id} search`;
  }

  remove(id: number) {
    return `This action removes a #${id} search`;
  }
}
