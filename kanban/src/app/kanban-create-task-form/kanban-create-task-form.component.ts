import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-kanban-create-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Include necessary modules here
  templateUrl: './kanban-create-task-form.component.html',
  styleUrls: ['./kanban-create-task-form.component.css'],
})
export class KanbanCreateTaskFormComponent implements OnInit {
  @Output() taskCreated = new EventEmitter<Task>();
  @Output() closeCreateFormEvent = new EventEmitter<void>(); // New output event

  taskForm!: FormGroup;
  submitted: boolean = false; // New flag to control error display on submit

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      description: ['', Validators.required], // Required validator for description
      createdDate: ['', Validators.required], // Required validator for createdDate
      dueDate: ['', Validators.required], // Required validator for dueDate
      assignee: [''],
      status: ['To Do'], // Default value for new tasks
    });
  }

  saveTask() {
    this.submitted = true; // Set submitted to true on form submit

    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      this.taskCreated.emit(taskData);
      this.resetForm();
      this.submitted = false; // Reset submitted flag after successful save
    }
  }

  closeForm() {
    this.closeCreateFormEvent.emit();
  }

  resetForm() {
    this.taskForm.reset({
      taskName: '',
      description: '',
      createdDate: '', // Reset to an empty string
      dueDate: '',
      assignee: '',
      status: 'To Do', // Reset to the default value
    });
    this.submitted = false; // Reset submitted flag when resetting form
  }
}
