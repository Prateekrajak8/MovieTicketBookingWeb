import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookTicketComponent } from '../book-ticket/book-ticket.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  movies = [
    { id: '1', title: 'RED NOTICE', posterUrl: 'https://images.alphacoders.com/117/thumbbig-1170974.webp', dis: 'An Interpol agent successfully tracks down the worlds most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.'},
    { id: '2', title: 'KGF', posterUrl: 'https://w0.peakpx.com/wallpaper/174/983/HD-wallpaper-kgf-chapter-2-thumbnail.jpg ',dis:'In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.'},
    { id: '3', title: 'RRR', posterUrl: 'https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr-thumbnail.jpg',dis:'A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.'},
    { id: '4', title: 'PK', posterUrl: 'https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/89635767.jpg', dis:'An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of there religious views on there people.'},
    { id: '5', title: 'IRON MAN', posterUrl:'https://w0.peakpx.com/wallpaper/325/87/HD-wallpaper-spider-man-and-iron-man-thumbnail.jpg',dis:'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.'},
    { id: '6', title: 'PUSHPA', posterUrl: 'https://w0.peakpx.com/wallpaper/472/353/HD-wallpaper-allu-arjun-pushpa-thumbnail.jpg',dis:'A manual labourer rises through the ranks of a smuggling syndicate, making some powerful enemies in the process. '},
    { id: '7', title: 'BHAHUBALI', posterUrl: 'https://w0.peakpx.com/wallpaper/143/282/HD-wallpaper-prabhas-baahubali-baahubali-2-baahubali2-bahubali-love-tamanna-thumbnail.jpg',dis:'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.'},
    { id: '8', title: '3 IDIOTS', posterUrl: 'https://wallpapercave.com/dwp1x/wp6568280.jpg',dis:'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots"'},]

  constructor(private router: Router) { }

  ngOnInit() { }

  showMovieDetail(movieid: string) {
    console.log(movieid);
    this.router.navigate(['/book-ticket',movieid]);
  }
}
