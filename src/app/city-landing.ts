import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-landing.html',
  styleUrl: './city-landing.css'
})
export class CityLanding implements OnInit {
  cityName: string = '';
  cityDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cityData = this.route.snapshot.data['city'];
    if (cityData) {
      this.cityName = cityData.replace('-', ' ').toUpperCase();
      this.setCityContent(cityData);
    } else {
      this.route.params.subscribe(params => {
        if (params['city']) {
          this.cityName = params['city'].replace('-', ' ').toUpperCase();
          this.setCityContent(params['city']);
        }
      });
    }
  }

  setCityContent(city: string) {
    const descriptions: { [key: string]: string } = {
      'delhi': 'Experience the heart of India with our premium hospitality and event services.',
      'delhi-ncr': 'Comprehensive travel and lifestyle assistance across the National Capital Region.',
      'agra': 'Explore the city of the Taj Mahal with curated travel and luxury dining experiences.',
      'lucknow': 'Discover the Nawabi culture with our specialized stay and entertainment services.'
    };
    this.cityDescription = descriptions[city] || 'Premier hospitality and travel assistance in India.';
  }
}