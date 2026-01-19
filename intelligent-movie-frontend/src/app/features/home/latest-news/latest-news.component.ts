import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: string;
  timeAgo: string;
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  categories: string[] = ['All', 'Movies', 'TV', 'Comics', 'Anime', 'Gaming', 'People & Politics'];
  selectedCategory: string = 'All';

  news: NewsItem[] = [
    {
      id: 1,
      title: "Dick Hallorann’s Potential Spinoff Addressed By Welcome To Derry Star After Finale",
      description: "Chris Chalk addresses the possibility of a Dick Hallorann spinoff series after the events of the IT: Welcome to Derry season 1 finale.",
      imageUrl: '/assets/movie1.jpg', // placeholder
      category: 'TV',
      author: 'Matthew Rudoy',
      timeAgo: '11 minutes ago'
    },
    {
      id: 2,
      title: "New Marvel Movie Announced for 2025",
      description: "Marvel Studios reveals the next big superhero film with an all-star cast and groundbreaking storyline.",
      imageUrl: '/assets/hero-movie.jpg',
      category: 'Movies',
      author: 'John Doe',
      timeAgo: '2 hours ago'
    },
    {
      id: 3,
      title: "Popular Streaming Series Renewed for Season 3",
      description: "The hit series that captivated audiences worldwide gets another season with exciting new plot twists.",
      imageUrl: '/assets/series1.jpg',
      category: 'TV',
      author: 'Jane Smith',
      timeAgo: '5 hours ago'
    },
    {
      id: 4,
      title: "Gaming Industry News: Major Release Delayed",
      description: "The highly anticipated game release has been postponed due to technical issues, disappointing fans.",
      imageUrl: '/assets/streaming1.jpg',
      category: 'Gaming',
      author: 'Tech Reviewer',
      timeAgo: '1 day ago'
    },
    {
      id: 5,
      title: "Anime Festival Announces 2025 Lineup",
      description: "The annual anime convention reveals an impressive roster of guests and exclusive screenings.",
      imageUrl: '/assets/movie1.jpg',
      category: 'Anime',
      author: 'Anime Fan',
      timeAgo: '2 days ago'
    },
    {
      id: 6,
      title: "Celebrity Couple's Breakup Makes Headlines",
      description: "Hollywood's power couple announces their separation, sparking rumors and media frenzy.",
      imageUrl: '/assets/hero-movie.webp',
      category: 'People & Politics',
      author: 'Entertainment Weekly',
      timeAgo: '3 days ago'
    }
  ];

  filteredNews: NewsItem[] = [];

  ngOnInit(): void {
    this.filterNews();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterNews();
  }

  filterNews() {
    if (this.selectedCategory === 'All') {
      this.filteredNews = this.news;
    } else {
      this.filteredNews = this.news.filter(n => n.category === this.selectedCategory);
    }
  }
}
