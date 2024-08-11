import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideNavComponent } from './components/left-side-nav/left-side-nav.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LeftSideNavComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  blogs: string[] = [];
  users = [
    {
      id: 1,
      name: 'Alice Johnson',
      profilepic: 'https://i.pravatar.cc/150?img=1',
      blog: [
        'Reflections on Modern Web Development',
        'The Rise of JavaScript Frameworks',
      ],
    },
    {
      id: 2,
      name: 'Bob Smith',
      profilepic: 'https://i.pravatar.cc/150?img=2',
      blog: [
        'Exploring the Best Coffee Shops',
        'Tips for Traveling on a Budget',
      ],
    },
    {
      id: 3,
      name: 'Charlie Brown',
      profilepic: 'https://i.pravatar.cc/150?img=3',
      blog: [
        'Hiking the Appalachian Trail',
        'Essential Gear for Outdoor Adventures',
      ],
    },
    {
      id: 4,
      name: 'David Wilson',
      profilepic: 'https://i.pravatar.cc/150?img=4',
      blog: ['Mastering Photography Techniques', 'Top Camera Reviews for 2024'],
    },
    {
      id: 5,
      name: 'Ella White',
      profilepic: 'https://i.pravatar.cc/150?img=5',
      blog: [
        'Healthy Recipes for Busy People',
        'Benefits of Daily Yoga Practice',
      ],
    },
    {
      id: 6,
      name: 'Frank Harris',
      profilepic: 'https://i.pravatar.cc/150?img=6',
      blog: ['Emerging Tech Trends in 2024', 'Advanced Programming Tips'],
    },
    {
      id: 7,
      name: 'Grace Lee',
      profilepic: 'https://i.pravatar.cc/150?img=7',
      blog: ['Art and Design Inspirations', 'The Creative Process Explained'],
    },
    {
      id: 8,
      name: 'Hannah Taylor',
      profilepic: 'https://i.pravatar.cc/150?img=8',
      blog: ['Top Fitness Tips for Beginners', 'A Guide to Balanced Nutrition'],
    },
    {
      id: 9,
      name: 'Ian Martin',
      profilepic: 'https://i.pravatar.cc/150?img=9',
      blog: [
        'The Startup Life: Challenges and Rewards',
        'Effective Business Strategies',
      ],
    },
    {
      id: 10,
      name: 'Jackie Clark',
      profilepic: 'https://i.pravatar.cc/150?img=10',
      blog: ['Current Fashion Trends', 'Style Guides for Every Season'],
    },
    {
      id: 11,
      name: 'Karen Wright',
      profilepic: 'https://i.pravatar.cc/150?img=11',
      blog: ['Mental Health Awareness', 'Self-Care Routines That Work'],
    },
    {
      id: 12,
      name: 'Larry Lewis',
      profilepic: 'https://i.pravatar.cc/150?img=12',
      blog: [
        'Automobile Reviews and Ratings',
        'Essential Car Maintenance Tips',
      ],
    },
    {
      id: 13,
      name: 'Megan Young',
      profilepic: 'https://i.pravatar.cc/150?img=13',
      blog: [
        'Travel Diaries: Exploring the World',
        'Top Destinations for 2024',
      ],
    },
    {
      id: 14,
      name: 'Nathan Hall',
      profilepic: 'https://i.pravatar.cc/150?img=14',
      blog: [
        'Music Production Techniques',
        "Learning Guitar: A Beginner's Guide",
      ],
    },
    {
      id: 15,
      name: 'Olivia King',
      profilepic: 'https://i.pravatar.cc/150?img=15',
      blog: [
        'Interior Design on a Budget',
        'Home Decor Ideas for Small Spaces',
      ],
    },
    {
      id: 16,
      name: 'Paul Green',
      profilepic: 'https://i.pravatar.cc/150?img=16',
      blog: [
        'Financial Tips for Young Professionals',
        'Investing Strategies That Work',
      ],
    },
    {
      id: 17,
      name: 'Quincy Baker',
      profilepic: 'https://i.pravatar.cc/150?img=17',
      blog: [
        'Exploring Local Cuisines',
        "Restaurant Reviews: What's Hot in 2024",
      ],
    },
    {
      id: 18,
      name: 'Rachel Adams',
      profilepic: 'https://i.pravatar.cc/150?img=18',
      blog: [
        'Literature Reviews: Classics and Modern',
        'Writing Tips for Aspiring Authors',
      ],
    },
    {
      id: 19,
      name: 'Steve Nelson',
      profilepic: 'https://i.pravatar.cc/150?img=19',
      blog: ['The Latest in Gaming News', 'Game Reviews: What to Play Next'],
    },
    {
      id: 20,
      name: 'Tina Scott',
      profilepic: 'https://i.pravatar.cc/150?img=20',
      blog: ['Parenting Advice for New Moms', 'Balancing Family and Career'],
    },
  ];

  selectedUser(id: number) {
    console.log(id);
    this.users.filter((x) => x.id === id).map((x) => (this.blogs = x.blog));
  }
}
