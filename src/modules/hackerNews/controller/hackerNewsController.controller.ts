import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(`${HackerNewsController.name}`)
@Controller(HackerNewsController.name)
export class HackerNewsController {}
