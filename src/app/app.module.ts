import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        AddTaskComponent,
        TaskListComponent
    ],
    bootstrap: [AppComponent],
    imports: [RouterOutlet, BrowserModule, CommonModule]
})

export class AppModule {}