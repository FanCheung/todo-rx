import { OnInit, Component, OnChanges, ChangeDetectorRef,ChangeDetectionStrategy, Input, OnDestroy
} from '@angular/core';
import {Observable,interval} from 'rxjs';

@Component({
  selector: 'todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit, OnChanges, OnDestroy{

  constructor(){
  }

  ngOnDestroy(){}
  ngOnInit() {}
  ngOnChanges(change) {  }
}



