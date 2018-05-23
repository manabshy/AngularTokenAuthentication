import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
    selector: 'messages',
    template: `
    `
})
export class MessagesComponent {
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getMessages();
    }
}
