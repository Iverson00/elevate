import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanTaskCardComponent } from './kanban-task-card/kanban-task-card.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { KanbanCreateTaskFormComponent } from './kanban-create-task-form/kanban-create-task-form.component';
import { KanbanUpdateTaskFormComponent } from './kanban-update-task-form/kanban-update-task-form.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { AuthService } from './services/auth.service';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    KanbanBoardComponent,
    KanbanColumnComponent,
    KanbanTaskCardComponent,
    KanbanUpdateTaskFormComponent,
    KanbanCreateTaskFormComponent,
    ReactiveFormsModule,
    ConfirmationModalComponent,
    BodyComponent, LoginComponent, RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KNG';
}
