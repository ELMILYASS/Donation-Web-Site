package com.example.backend.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfigurerr {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Apply CORS configuration to all endpoints
                        .allowedOrigins("http://localhost:5173/")
                        .allowedOrigins("http://127.0.0.1:5173/")// Allow requests from any origin (you can specify specific origins instead)
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific HTTP methods
                        .allowedHeaders("*") // Allow specific headers (you can specify specific headers instead)
                        .allowCredentials(true); // Allow sending and receiving of credentials (cookies, authorization headers, etc.)
            }
        };
    }
}