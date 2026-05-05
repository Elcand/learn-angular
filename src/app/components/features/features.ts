import { Component } from '@angular/core';
import { LucideAngularModule, Music, Trophy, User } from 'lucide-angular'

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  readonly Music = Music
  readonly Trophy = Trophy
  readonly User = User
}
