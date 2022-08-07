import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../../src/prisma/prisma.service';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  async createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ) {
    const bookmark = await this.prisma.borkmark.create(
      {
        data: {
          userId,
          ...dto,
        },
      },
    );
    return bookmark;
  }

  getBookmarks(userId: number) {
    return this.prisma.borkmark.findMany({
      where: {
        userId,
      },
    });
  }

  getBookmarkByID(userId: number, bookmarkId: number) {
    return this.prisma.borkmark.findMany({
      where: {
        userId,
        id: bookmarkId,
      },
    });
  }

  async editBookmarkByID(
    userId: number,
    bookmarkId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmark =
      await this.prisma.borkmark.findUnique({
        where: {
          id: bookmarkId,
        },
      });
    if (!bookmark || bookmark.userId != userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.borkmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBookmarkByID(
    userId: number,
    bookmarkId: number,
  ) {
    const bookmark =
      await this.prisma.borkmark.findUnique({
        where: {
          id: bookmarkId,
        },
      });
    if (!bookmark || bookmark.userId != userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );
    await this.prisma.borkmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}
