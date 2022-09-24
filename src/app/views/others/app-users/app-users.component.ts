import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css']
})
export class AppUsersComponent implements OnInit {
  users = [
    {
      'name': 'Snow Benton',
      'membership': 'Paid Member',
      'phone': '+1 (956) 486-2327',
      'photo': 'assets/images/face-1.jpg',
      'address': '329 Dictum Court, Minnesota',
      'registered': '2016-07-09'
    },
    {
      'name': 'Kay Sellers',
      'membership': 'Paid Member',
      'phone': '+1 (929) 406-3172',
      'photo': 'assets/images/face-2.jpg',
      'address': '893 Garden Place, American Samoa',
      'registered': '2017-02-16'
    },
    {
      'name': 'Robert Middleton',
      'membership': 'Paid Member',
      'phone': '+1 (995) 451-2205',
      'photo': 'assets/images/face-3.jpg',
      'address': '301 Hazel Court, West Virginia',
      'registered': '2017-01-22'
    },
    {
      'name': 'Delaney Randall',
      'membership': 'Paid Member',
      'phone': '+1 (922) 599-2410',
      'photo': 'assets/images/face-4.jpg',
      'address': '128 Kensington Walk, Ohio',
      'registered': '2016-12-08'
    },
    {
      'name': 'Melendez Lawrence',
      'membership': 'Paid Member',
      'phone': '+1 (824) 589-2029',
      'photo': 'assets/images/face-5.jpg',
      'address': '370 Lincoln Avenue, Florida',
      'registered': '2015-03-29'
    },
    {
      'name': 'Galloway Fitzpatrick',
      'membership': 'Paid Member',
      'phone': '+1 (907) 477-2375',
      'photo': 'assets/images/face-6.jpg',
      'address': '296 Stuyvesant Avenue, Iowa',
      'registered': '2015-12-12'
    },
    {
      'name': 'Watson Joyce',
      'membership': 'Paid Member',
      'phone': '+1 (982) 500-3137',
      'photo': 'assets/images/face-7.jpg',
      'address': '224 Visitation Place, Illinois',
      'registered': '2015-08-19'
    },
    {
      'name': 'Ada Kidd',
      'membership': 'Paid Member',
      'phone': '+1 (832) 531-2385',
      'photo': 'assets/images/face-1.jpg',
      'address': '230 Oxford Street, South Dakota',
      'registered': '2016-08-11'
    },
    {
      'name': 'Raquel Mcintyre',
      'membership': 'Paid Member',
      'phone': '+1 (996) 443-2102',
      'photo': 'assets/images/face-2.jpg',
      'address': '393 Sullivan Street, Palau',
      'registered': '2014-09-03'
    },
    {
      'name': 'Juliette Hunter',
      'membership': 'Paid Member',
      'phone': '+1 (876) 568-2964',
      'photo': 'assets/images/face-3.jpg',
      'address': '191 Stryker Court, New Jersey',
      'registered': '2017-01-18'
    },
    {
      'name': 'Workman Floyd',
      'membership': 'Paid Member',
      'phone': '+1 (996) 481-2712',
      'photo': 'assets/images/face-4.jpg',
      'address': '350 Imlay Street, Utah',
      'registered': '2017-05-01'
    },
    {
      'name': 'Amanda Bean',
      'membership': 'Paid Member',
      'phone': '+1 (894) 512-3907',
      'photo': 'assets/images/face-5.jpg',
      'address': '254 Stockton Street, Vermont',
      'registered': '2014-08-30'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
