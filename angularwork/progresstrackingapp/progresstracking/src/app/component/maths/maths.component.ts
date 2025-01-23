import { Component } from '@angular/core';

interface Subtask {
  name: string;
  completed: boolean;
  videoUrl: string;
  solutionUrl: string;
  notesUrl: string;
}

interface Task {
  name: string;
  subtasksmaths: Subtask[];
  progress: number;
  completedSubtasksmaths: number;
  showSubtasksmaths: boolean;
}

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrl: './maths.component.css'
})
export class MathsComponent{

  progress: number = 0;
  theme: string = 'light-mode';
  sidebarToggled : boolean = false; // track the sidebar state

  tasksmaths: Task[] = [];

  constructor() {
    if (this.isBrowser()) {
      this.loadtasksmathsFromLocalStorage();
      
    }
  }

  // Corrected placement of the isBrowser method
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Toggle the visibility of subtasksmaths
  toggleSubtasksmaths(task: Task) {
    task.showSubtasksmaths = !task.showSubtasksmaths;
    if (this.isBrowser()) {
      localStorage.setItem('tasksmaths', JSON.stringify(this.tasksmaths));
    }
  }

  // Save tasksmaths to localStorage
  savetasksmathsToLocalStorage() {
    if (this.isBrowser()) {
      localStorage.setItem('tasksmaths', JSON.stringify(this.tasksmaths));
    }
  }

  // Update task progress
  updateTaskProgress(task: Task) {
    const totalSubtasksmaths = task.subtasksmaths.length;
    const completedSubtasksmaths = task.subtasksmaths.filter(subtask => subtask.completed).length;
    task.completedSubtasksmaths=completedSubtasksmaths;
    task.progress = Math.round((completedSubtasksmaths / totalSubtasksmaths) * 100) || 0;

    // After updating an individual task, recalculate the total progress
    this.updateTotalProgress();
    if (this.isBrowser()) {
      localStorage.setItem('tasksmaths', JSON.stringify(this.tasksmaths));
    }
  }

  // Update total progress bar
  updateTotalProgress() {
    let totalSubtasksmaths = this.tasksmaths.reduce((sum, task) => sum + task.subtasksmaths.length, 0);
    let completedSubtasksmaths = this.tasksmaths.reduce((sum, task) => sum + task.subtasksmaths.filter(subtask => subtask.completed).length, 0);

    this.progress = Math.round((completedSubtasksmaths / totalSubtasksmaths) * 100) || 0;
    
  }

  // Load tasksmaths from localStorage
  loadtasksmathsFromLocalStorage() {
    const savedtasksmaths = localStorage.getItem('tasksmaths');
    if (savedtasksmaths) {
      this.tasksmaths = JSON.parse(savedtasksmaths);
      // Recalculate completedSubtasks and progress for each task
      this.tasksmaths.forEach(task => {
        const totalSubtasks = task.subtasksmaths.length;
        const completedSubtasks = task.subtasksmaths.filter(subtask => subtask.completed).length;
        
        task.completedSubtasksmaths = completedSubtasks;
        task.progress = Math.round((completedSubtasks / totalSubtasks) * 100) || 0;
      });
      this.updateTotalProgress();
    } else {
      // If no tasksmaths in local storage, initialize with some default tasksmaths
      this.tasksmaths = [
        {
          name: 'Task 1',
          subtasksmaths: [
            { name: 'Subtask 1.1', completed: false, videoUrl: 'https://youtube.com/your-video-1', solutionUrl: 'https://example.com/solution-1', notesUrl: 'https://example.com/notes-1' },
            { name: 'Subtask 1.2', completed: false, videoUrl: 'https://youtube.com/your-video-2', solutionUrl: 'https://example.com/solution-2', notesUrl: 'https://example.com/notes-2' }
          ],
          progress: 0,
          completedSubtasksmaths: 0,
          showSubtasksmaths: false
        },
       
      ];

      this.updateTotalProgress();
    }
  }
}

