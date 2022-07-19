import { IfStmt } from "@angular/compiler";
import { Component } from "@angular/core";

// class Log {
//   indice: number;
//   timestamp: Date;
// }

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .fifth {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  isMessageDisplayed = false;
  clickLogsArray = [];
  counter = 1;
  color = "";

  onClickButton() {
    this.isMessageDisplayed = !this.isMessageDisplayed;
    this.clickLogsArray.push(new Date());
  }
}
