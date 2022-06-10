import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/_shared/entities';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  async findAll(): Promise<Project[]> {
    return await this.projectsRepository.find();
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectsRepository.findOne({
      where: { id },
      relations: { tags: true },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}

// const projects: Project[] = [
//   {
//     id: 1,
//     name: 'Your news in Thailand',
//     scope: 'Thailand',
//     desc: 'In Thailand, we are supporting rubber farmers to transform their monocultures into sustainable agroforestry rubber farms.',
//     imageUrl:
//       'https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png',
//     tags: [1, 2, 3],
//   },
//   {
//     id: 2,
//     name: 'Your trees in the Philippines',
//     scope: 'Tree planting',
//     desc: 'In the Philippines, we are planting native seedlings to restore the land, and creating agroforestry systems with smallholder farmers.',
//     imageUrl:
//       'https://blog.ecosia.org/content/images/size/w1200/2021/04/Philipinen-header_En.png',
//     tags: [],
//   },
//   {
//     id: 3,
//     name: 'Your trees in Cameroon',
//     scope: 'Tree planting',
//     desc: 'Your trees restore biodiversity all the while promoting better livelihoods for local communities.',
//     imageUrl:
//       'https://blog.ecosia.org/content/images/size/w1200/2021/02/Cameroon.jpg',
//     tags: [3, 4],
//   },
//   {
//     id: 1,
//     name: 'Your trees in Nigeria',
//     scope: 'Tree planting',
//     desc: 'Your trees in Nigeria are providing opportunities for inclusive rural development.',
//     imageUrl:
//       'https://blog.ecosia.org/content/images/size/w1200/2021/04/Nigeria-header_En.png',
//     tags: [],
//   },
// ];
