import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})

export class BookTicketComponent {
  
   constructor(private router: ActivatedRoute,private route:Router){
   
   }
   seats = [
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },

    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },{ selected: false },
    { selected: false },
    { selected: false },{ selected: false },
    { selected: false },
    { selected: false },

    { selected: false },{ selected: false },{ selected: false },

    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },{ selected: false },
    { selected: false },
    { selected: false },{ selected: false },
    { selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },
    { selected: false },{ selected: false },{ selected: false },
    { selected: false },{ selected: false },{ selected: false },{ selected: false },
    { selected: false },{ selected: false },{ selected: false },{ selected: false },
    { selected: false },{ selected: false },{ selected: false },
    { selected: false },

    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },{ selected: false },{ selected: false },
    { selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },

    { selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },
    { selected: false },
    { selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },
    { selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },
    { selected: false },
    { selected: false },{ selected: false },{ selected: false },{ selected: false },{ selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },
    { selected: false },{ selected: false },

  ];
  movies = [
    { movieId: '1', title: 'RED NOTICE', posterUrl: 'https://w0.peakpx.com/wallpaper/784/814/HD-wallpaper-red-notice-netflix-movie-thumbnail.jpg', dis: 'An FBI profiler pursuing the worlds most wanted art thief becomes his reluctant partner in crime to catch an elusive crook whos always one step ahead    Starring:Dwayne Johnson,Ryan Reynolds,Gal Gadot' },
    { movieId: '2', title: 'KGF', posterUrl: 'https://w0.peakpx.com/wallpaper/841/90/HD-wallpaper-kgf-chapter-2-kgf-rocking-star-yash-yash-thumbnail.jpg', dis: 'In the blood-soaked Kolar Gold Fields, Rockys name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.'},
    { movieId: '3', title: 'RRR', posterUrl: 'https://w0.peakpx.com/wallpaper/647/415/HD-wallpaper-ram-charan-alia-bhatt-jr-ntr-mega-powerstar-mega-star-rrr-tollywood-thumbnail.jpg' ,dis: 'A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India'},
    { movieId: '4', title: 'PK', posterUrl: 'https://w0.peakpx.com/wallpaper/882/140/HD-wallpaper-pk-amir-khan-anushka-sharma-hindi-movie-thumbnail.jpg' ,dis: 'An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of there religious views on there people.'},
    { movieId: '5', title: 'IRON MAN', posterUrl: 'https://w0.peakpx.com/wallpaper/570/446/HD-wallpaper-iron-man-ironman-marvel-thumbnail.jpg' ,dis: 'When Tony Starks world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.'},
    { movieId: '6', title: 'PUSHPA', posterUrl: 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/04/08/Stylish-Star-Allu-Arjun-First-Look-Posters-as-Pushpa-Raj-From-Pushpa-Movie-in-5-languages-.jpg?quality=80&zoom=1&ssl=1',dis:'A manual labourer rises through the ranks of a smuggling syndicate, making some powerful enemies in the process.'},
    { movieId: '7', title: 'BHAHUBALI', posterUrl: 'https://w0.peakpx.com/wallpaper/959/746/HD-wallpaper-baahubali-2-aditya-baahubali-bahubali-prabhas-rana-tamanna-thumbnail.jpg' ,dis: 'In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.'},
    { movieId: '8', title: '3 IDIOTS', posterUrl: 'https://w0.peakpx.com/wallpaper/295/126/HD-wallpaper-3-idiots-priyanshu-rajput-thumbnail.jpg',dis: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".'},]
     
    
  book(index: number){
    console.log(index);
    this.seats[index].selected = !this.seats[index].selected;
  }
  selected(): boolean{
   return this.seats.some(seat=>seat.selected);
  }

movieId:string='';
ngOnInit(){
  let movieId = this.router.snapshot.paramMap.get('id');
  if (movieId) {
    console.log(movieId);
    this.movieId = movieId;
  }
  console.log(movieId);
}

returnToDashboard(){
   this.route.navigateByUrl('dashboard');
}

}
