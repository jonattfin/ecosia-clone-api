import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  scope: string;

  @Column()
  desc: string;

  @Column()
  imageUrl: string;

  @ManyToMany((type) => Tag, (tag) => tag.projects)
  tags: Tag[];
}

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @ManyToMany((type) => Project, (project) => project.tags, {
    cascade: true,
  })
  @JoinTable()
  projects: Project[];
}
