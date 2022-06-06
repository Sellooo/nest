export class CreateTextDto {
  constructor(title: string, content: string) {
    title = this.title;
    content = this.content;
  }

  title: string;
  content: string;
  like?: number;
  bad?: number;
}
