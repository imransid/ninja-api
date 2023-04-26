import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjaUsersService {
  private ninjas = [
    {
      id: 0,
      name: 'hayabusa',
    },
    {
      id: 1,
      name: 'saber',
    },
  ];

  getNinjas(hero?: 'saber' | 'hayabusa') {
    if (hero) {
      return this.ninjas.filter((ninja) => ninja.name == hero);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => {
      return ninja.id === id;
    });

    if (!ninja) {
      throw new Error('ninja not found');
    }

    return ninja;
  }
}
