import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "getValueByKey",
  pure: false
})
export class GetValueByKeyPipe implements PipeTransform {
  transform(value: any[], id: number, property: string): any {
    const filteredObj = value.find(item => {
      if (item.id !== undefined) {
        return item.id === id;
      }

      return false;
    });

    if (filteredObj) {
      return filteredObj[property];
    }
  }
}
