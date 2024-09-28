import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
    task: string = ''
    @Output() taskAdded = new EventEmitter<string>()
    

    addTask() {
        this.taskAdded.emit(this.task)
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key == "Enter") {
            this.addTask()
        }
    }
}