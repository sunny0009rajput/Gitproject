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
  subtasks: Subtask[];
  progress: number;
  completedSubtasks: number;
  showSubtasks: boolean;
}
@Component({
  selector: 'app-reasoning',
  templateUrl: './reasoning.component.html',
  styleUrl: './reasoning.component.css'
})
export class ReasoningComponent{

  progress: number = 0;
  theme: string = 'light-mode';
  sidebarToggled : boolean = false; // track the sidebar state

  tasks: Task[] = [];

  constructor() {
    if (this.isBrowser()) {
      this.loadTasksFromLocalStorage();
      
    }
  }

  
  // method to load theme from the local storage or default to light mode
  

  

  // Corrected placement of the isBrowser method
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Toggle theme between light and dark
  

  // Toggle the visibility of subtasks
  toggleSubtasks(task: Task) {
    task.showSubtasks = !task.showSubtasks;
    if (this.isBrowser()) {
      localStorage.setItem('reasoningtasks', JSON.stringify(this.tasks));
    }
  }

  // Save tasks to localStorage
  saveTasksToLocalStorage() {
    if (this.isBrowser()) {
      localStorage.setItem('reasoningtasks', JSON.stringify(this.tasks));
    }
  }

  // Update task progress
  updateTaskProgress(task: Task) {
    const totalSubtasks = task.subtasks.length;
    const completedSubtasks = task.subtasks.filter(subtask => subtask.completed).length;
    task.completedSubtasks=completedSubtasks;
    task.progress = Math.round((completedSubtasks / totalSubtasks) * 100) || 0;

    // After updating an individual task, recalculate the total progress
    this.updateTotalProgress();
    if (this.isBrowser()) {
      localStorage.setItem('reasoningtasks', JSON.stringify(this.tasks));
    }
  }

  // Update total progress bar
  updateTotalProgress() {
    let totalSubtasks = this.tasks.reduce((sum, task) => sum + task.subtasks.length, 0);
    let completedSubtasks = this.tasks.reduce((sum, task) => sum + task.subtasks.filter(subtask => subtask.completed).length, 0);

    this.progress = Math.round((completedSubtasks / totalSubtasks) * 100) || 0;
    
  }

  // Load tasks from localStorage
  loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('reasoningtasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      // Recalculate completedSubtasks and progress for each task
      this.tasks.forEach(task => {
        const totalSubtasks = task.subtasks.length;
        const completedSubtasks = task.subtasks.filter(subtask => subtask.completed).length;
        
        task.completedSubtasks = completedSubtasks;
        task.progress = Math.round((completedSubtasks / totalSubtasks) * 100) || 0;
      });
      this.updateTotalProgress();
    } else {
      // If no tasks in local storage, initialize with some default tasks
      this.tasks = [
        {
          name: 'Task 1',
          subtasks: [
            { name: 'Subtask 1.1', completed: false, videoUrl: 'https://youtube.com/your-video-1', solutionUrl: 'https://example.com/solution-1', notesUrl: 'https://example.com/notes-1' },
            { name: 'Subtask 1.2', completed: false, videoUrl: 'https://youtube.com/your-video-2', solutionUrl: 'https://example.com/solution-2', notesUrl: 'https://example.com/notes-2' }
          ],
          progress: 0,
          completedSubtasks: 0,
          showSubtasks: false
        },
        {
          name: 'Task 1',
          subtasks: [
            { name: 'Subtask 1.1', completed: false, videoUrl: 'https://youtube.com/your-video-1', solutionUrl: 'https://example.com/solution-1', notesUrl: 'https://example.com/notes-1' },
            { name: 'Subtask 1.2', completed: false, videoUrl: 'https://youtube.com/your-video-2', solutionUrl: 'https://example.com/solution-2', notesUrl: 'https://example.com/notes-2' }
          ],
          progress: 0,
          completedSubtasks: 0,
          showSubtasks: false
        },
        {
          name: 'Task 1',
          subtasks: [
            { name: 'Subtask 1.1', completed: false, videoUrl: 'https://youtube.com/your-video-1', solutionUrl: 'https://example.com/solution-1', notesUrl: 'https://example.com/notes-1' },
            { name: 'Subtask 1.2', completed: false, videoUrl: 'https://youtube.com/your-video-2', solutionUrl: 'https://example.com/solution-2', notesUrl: 'https://example.com/notes-2' }
          ],
          progress: 0,
          completedSubtasks: 0,
          showSubtasks: false
        },
        {
          name: 'Task 1',
          subtasks: [
            { name: 'Subtask 1.1', completed: false, videoUrl: 'https://youtube.com/your-video-1', solutionUrl: 'https://example.com/solution-1', notesUrl: 'https://example.com/notes-1' },
            { name: 'Subtask 1.2', completed: false, videoUrl: 'https://youtube.com/your-video-2', solutionUrl: 'https://example.com/solution-2', notesUrl: 'https://example.com/notes-2' }
          ],
          progress: 0,
          completedSubtasks: 0,
          showSubtasks: false
        },
       
      ];

      this.updateTotalProgress();
    }
  }
}


