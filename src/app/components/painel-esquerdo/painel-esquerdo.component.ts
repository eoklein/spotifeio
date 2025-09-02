import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'painel-esquerdo',
  standalone: true,
  imports: [],
  templateUrl: './painel-esquerdo.component.html',
  styleUrl: './painel-esquerdo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {

  ngOnInit(): void {

  }
}