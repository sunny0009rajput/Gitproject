import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'FedEx Shipment Management System',
      description: 'Centralized admin system for cross-border shipment data.',
      link: '#',
      image: 'assets/fedex.png',
    },
    {
      title: 'Healthcare System Development',
      description: 'Frontend and API integration for improved user experience.',
      link: '#',
      image: 'assets/uhg.png',
    },
    {
      title: 'Yahoo VAS Integration',
      description:
        'Backend system for integrating value-added services with cloud deployment.',
      link: '#',
      image: 'assets/yahoo.png',
    },
  ];
}
