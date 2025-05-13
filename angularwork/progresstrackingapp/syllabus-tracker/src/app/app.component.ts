import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'syllabus-tracker';
  subjects: any[] = [];

  ngOnInit() {
    const savedSubjects = localStorage.getItem('subjects');
    if (savedSubjects) {
      this.subjects = JSON.parse(savedSubjects);
    }
  }

  saveSubjects() {
    localStorage.setItem('subjects', JSON.stringify(this.subjects));
  }

  addSubject() {
    const subjectName = prompt('Enter subject name:');
    if (subjectName) {
      this.subjects.push({ name: subjectName, topics: [], progress: 0 });
      this.saveSubjects();
    }
  }

  addTopic(subject: any) {
    const topicName = prompt('Enter topic name:');
    if (topicName) {
      subject.topics.push({ name: topicName, subtopics: [], completed: 0 });
      this.saveSubjects();
    }
  }

  addSubtopic(topic: any) {
    const subtopicName = prompt('Enter subtopic name:');
    if (subtopicName) {
      topic.subtopics.push({ name: subtopicName, done: false });
      this.saveSubjects();
    }
  }

  toggleSubtopic(subtopic: any, topic: any) {
    subtopic.done = !subtopic.done;
    topic.completed = topic.subtopics.filter((s: any) => s.done).length / topic.subtopics.length * 100;
    this.saveSubjects();
  }

  deleteSubject(index: number) {
    this.subjects.splice(index, 1);
    this.saveSubjects();
  }

  deleteTopic(subject: any, index: number) {
    subject.topics.splice(index, 1);
    this.saveSubjects();
  }

  deleteSubtopic(topic: any, index: number) {
    topic.subtopics.splice(index, 1);
    this.saveSubjects();
  }
}
