import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  private isMenuOpen: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const navbarToggler = this.el.nativeElement.querySelector(".navbar-toggler");
    const navbarMenu = this.el.nativeElement.querySelector("#navbarNav");

    this.renderer.listen(navbarToggler, 'click', () => {
      if (this.isMenuOpen) {
        this.renderer.removeClass(navbarMenu, "show");
      } else {
        this.renderer.addClass(navbarMenu, "show");
      }
      this.isMenuOpen = !this.isMenuOpen;
    });

    // Dodajte event listenere za svaki od linkova u meniju
    const navLinks = this.el.nativeElement.querySelectorAll(".nav-link");

    navLinks.forEach((link: Element) => {
      this.renderer.listen(link, 'click', () => {
        if (this.isMenuOpen) {
          this.renderer.removeClass(navbarMenu, "show");
          this.isMenuOpen = false;
        }
      });
    });
  }



  ChangeLangunage(lang:any){
    
  }

  changeSrpski(lang:any){
  

  }
}
