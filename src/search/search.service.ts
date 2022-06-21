import { Injectable } from '@nestjs/common';
import { random, range } from 'lodash';

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
    return range(1, 25).map(() => {
      const randomNumber = random(100, 1000);
      return {
        url: `https://duckduckgo.com/?q=${id}`,
        snippet: `${id} ${randomNumber}`,
        name: `${id} ${randomNumber}`,
      };
    });
  }

  update(id: number, updateSearchDto: UpdateSearchDto) {
    return `This action updates a #${id} search`;
  }

  remove(id: number) {
    return `This action removes a #${id} search`;
  }
}
