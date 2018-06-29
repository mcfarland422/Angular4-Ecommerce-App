import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "titleCase"
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let words = value.split(" ");
    for (var i = 0; i < words.length; i++) {
      if (i > 0 && this.isPreposition(words[i]))
        words[i] = words[i].toLowerCase();
      else {
        words[i] =
          words[i].substr(0, 1).toUpperCase() +
          words[i].substr(1).toLowerCase();
      }
    }

    return words.join(" ");
  }
  private toTitleCase(word: string): string {}

  private isPreposition(word: string): boolean {
    let prepositions = ["of", "the"];
    return prepositions.includes(word.toLocaleLowerCase());
  }
}
