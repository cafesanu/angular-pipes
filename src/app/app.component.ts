import { Component } from '@angular/core';

interface IServer {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filteredStatus: string = '';
  public appStatus: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve('stable');
      },
      2000
    );
  });

  public servers: IServer[] = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  public getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  public onAddServer(): void {
    this.servers.push({
      instanceType: 'small',
      name: 'new Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
