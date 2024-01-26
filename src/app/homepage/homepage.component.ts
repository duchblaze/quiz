import { Component, ElementRef, HostBinding, Inject, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { CurrentAffairsService } from '../service/current-affairs.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef; //the name should be the same with what was added to html field
  @HostBinding("class.pc") pcMode = false;
  submitted: boolean = false;
  name!: string;

  constructor(
    @Inject(BreakpointObserver)
    private breakpointObserver: BreakpointObserver,
    private currentService: CurrentAffairsService,
    private router: Router
  ) { this.selectedOption = ''; }

  ngOnInit(): void {

      // this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe({
      //   next: (result: any) => {
      //     // console.log(result)
      //     for (let breakpoint of Object.keys(result.breakpoints)) {
      //       if (result.breakpoints[breakpoint]) {
      //         if (breakpoint === Breakpoints.HandsetPortrait) {
      //           this.pcMode = false;
      //         }

      //         if (breakpoint === Breakpoints.WebLandscape) {
      //           this.pcMode = true;
      //         }
      //       }
      //     }
      //   },
      // });
    this.showCurrentAffairsQuest()
    if (!this.name) {
      this.submitted = true;
      return;
    }
    }

    startQuiz(form: NgForm) {
      localStorage.setItem("name", this.nameKey.nativeElement.value)
    }

  showCurrentAffairsQuest() {
    this.currentService.getCurrentAffairsQuestion().subscribe((res) => {
      console.log(res.questions)
    })
  }

  public selectedOption: string;



  navigate() {
    if (this.selectedOption === 'Religion') {
      this.router.navigate(['/app-questions']);
    } else if (this.selectedOption === 'Politics') {
      this.router.navigate(['/app-software-quiz']);
    }
  }


}
