import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  doc: string = "https://calibre-ebook.com/downloads/demos/demo.docx"
  constructor() { }

  ngOnInit(): void {
  }

}
