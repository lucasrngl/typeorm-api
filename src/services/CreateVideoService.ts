import { AppDataSource } from '../data-source';
import { Category } from '../entities/Category';
import { Video } from '../entities/Video';

interface VideoRequest {
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

export class CreateVideoService {
  async execute({ name, description, duration, category_id }: VideoRequest) {
    const repo = AppDataSource.getRepository(Video);
    const repoCategory = AppDataSource.getRepository(Category);

    if (!(await repoCategory.findOneBy({ id: category_id })))
      return new Error('Category does not exists');

    const video = repo.create({ name, description, duration, category_id });

    await repo.save(video);

    return video;
  }
}
