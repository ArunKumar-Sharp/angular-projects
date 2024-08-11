import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [NgFor],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.css',
})
export class LeftSideNavComponent {
  @Input() users!: { id: number; name: string; profilepic: string }[];
  @Output() selectedUser = new EventEmitter<number>();

  selectedUserEvent(id: number) {
    this.selectedUser.emit(id);
  }
}
