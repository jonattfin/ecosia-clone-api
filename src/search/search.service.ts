import { Injectable } from '@nestjs/common';
import { random, range } from 'lodash';

import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';

@Injectable()
export class SearchService {
  create(_createSearchDto: CreateSearchDto) {
    return 'This action adds a new search';
  }

  findAll() {
    return ['a', 'b', 'c', 'd'];
  }

  findOne(id: string) {
    const numberOfElements = random(100, 1000);
    return range(1, numberOfElements).map(() => {
      const randomNumber = random(100, 1000);
      return {
        url: `https://duckduckgo.com/?q=${id}`,
        snippet: `${id} ${randomNumber}`,
        name: `${id} ${randomNumber}`,
      };
    });
  }

  update(id: number, _updateSearchDto: UpdateSearchDto) {
    return `This action updates a #${id} search`;
  }

  remove(id: number) {
    return `This action removes a #${id} search`;
  }
}
