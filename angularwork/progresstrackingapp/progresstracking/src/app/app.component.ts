import { Component } from '@angular/core';

// Define Subtask and Task interfaces at the top
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls (with 's')
})
export class AppComponent {
  title = 'progresstracking';
  progress: number = 0;
  theme: string = 'light-mode';
  sidebarToggled : boolean = false; // track the sidebar state

  tasks: Task[] = [];



  toggleSidebar(): void{
    this.sidebarToggled =! this.sidebarToggled;
    const wrapper =document.getElementById('wrapper');
    if(wrapper){
      if(this.sidebarToggled){
        wrapper.classList.add('toggled');
      }else{
        wrapper.classList.remove('toggled')
      }
    }
  }

  // Corrected placement of the isBrowser method
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

}
